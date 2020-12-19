import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ArticleDialogComponent} from '../article-dialog/article-dialog.component';

@Component({
  selector: 'app-create-article-fab',
  templateUrl: './create-article-fab.component.html',
  styleUrls: ['./create-article-fab.component.css']
})
export class CreateArticleFabComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ArticleDialogComponent, {
      minWidth: '50%',
      data: {
        newArticle: true,
      }
    });
  }
}
