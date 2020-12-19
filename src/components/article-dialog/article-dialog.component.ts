import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import DialogData from '../../models/DialogData';

@Component({
  selector: 'app-article-dialog',
  templateUrl: './article-dialog.component.html',
  styleUrls: ['./article-dialog.component.css']
})
export class ArticleDialogComponent implements OnInit {

  newArticle = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.newArticle = data.newArticle;
  }

  ngOnInit(): void {}

}
