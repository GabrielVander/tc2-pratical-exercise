import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../api/api.service';
import {catchError, map} from 'rxjs/operators';
import News from '../../models/News';
import NewsResponse from '../../models/api/NewsResponse';
import NewsRequest from '../../models/NewsRequest';
import AddArticleRequest from '../../models/api/AddArticleRequest';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public static newsEndpoint = 'noticias/';
  private $news: BehaviorSubject<News[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {

  }

  get news(): BehaviorSubject<News[]> {
    return this.$news;
  }

  set news(value: BehaviorSubject<News[]>) {
    this.$news = value;
  }

  private static toNews(newsResponse: NewsResponse): News {
    return {
      ...newsResponse,
      title: newsResponse.titulo,
      subtitle: newsResponse.subtitulo,
      content: newsResponse.conteudo,
      editable: newsResponse.editavel === 1,
      datetime: newsResponse.data,
      categoryId: newsResponse.idCategoria,
    };
  }

  private static toAddRequest(article: NewsRequest): AddArticleRequest {
    return {
      titulo: article.title,
      subtitulo: article.subtitle,
      conteudo: article.content,
      idCategoria: article.categoryId,
    };
  }

  public getByCategoryId(categoryId: number): void {
    this.http
      .get<NewsResponse[]>(`${ApiService.baseAPIEndpoint + NewsService.newsEndpoint}listar.php?id=${categoryId}`)
      .pipe(
        map(
          response => response.map(
            (value) => NewsService.toNews(value)
          )
        ),
        catchError(err => {
          console.error(err);
          return [];
        })
      )
      .subscribe(value => this.news.next(value));
  }

  public addArticle(article: NewsRequest): void {
    const request: AddArticleRequest = NewsService.toAddRequest(article);
    this.http
      .post(
        `${ApiService.baseAPIEndpoint}${NewsService.newsEndpoint}cadastrar.php?titulo=${request.titulo}&subtitulo=${request.subtitulo}&conteudo=${request.conteudo}&idCategoria=${request.idCategoria}`,
        {}
      )
      .subscribe((value) => {
        // @ts-ignore
        if (value?.status === 'ok') {
          this.snackBar.open('Article added', '', {
            duration: 2000
          });
          this.getByCategoryId(article.categoryId);
        } else {
          // @ts-ignore
          this.snackBar.open(`Error: ${value?.msg}`, '', {
            duration: 2000
          });
        }
      });
  }

  deleteArticle(id: number): void {
    this.http
      .get(ApiService.baseAPIEndpoint + NewsService.newsEndpoint + 'deletar.php?id=' + id)
      .subscribe(value => {
        // @ts-ignore
        if (value?.status === 'ok') {
          this.snackBar.open('Article deleted', '', {
            duration: 2000
          });
          this.$news.next(this.$news.value.filter(news => news.id !== id));
        } else {
          // @ts-ignore
          this.snackBar.open(`Error: ${value?.msg}`, '', {
            duration: 2000
          });
        }
      });
  }
}
