import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../api/api.service';
import {catchError, map} from 'rxjs/operators';
import News from '../../models/News';
import NewsResponse from '../../models/api/NewsResponse';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public static newsEndpoint = 'noticias/';
  private $news: BehaviorSubject<News[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {

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

}
