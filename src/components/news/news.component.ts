import {Component, Input, OnInit} from '@angular/core';
import News from '../../models/News';
import {NewsService} from '../../services/news/news.service';
import {ArticleDialogComponent} from '../article-dialog/article-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input()
  article: News;

  constructor(private newsService: NewsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  delete(id: number): void {
    this.newsService.deleteArticle(id);
  }

  edit(article: News): void {
    this.dialog.open(ArticleDialogComponent, {
      minWidth: '50%',
      data: {
        newArticle: false,
        article
      }
    });
  }
}
