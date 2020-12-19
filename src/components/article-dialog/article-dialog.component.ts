import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import DialogData from '../../models/DialogData';
import News from '../../models/News';

@Component({
  selector: 'app-article-dialog',
  templateUrl: './article-dialog.component.html',
  styleUrls: ['./article-dialog.component.css']
})
export class ArticleDialogComponent implements OnInit {

  newArticle = true;
  article: News;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.newArticle = data.newArticle;
    this.article = data.article;
  }

  ngOnInit(): void {}

}
