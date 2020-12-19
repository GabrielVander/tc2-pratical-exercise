import {Component, Input, OnInit} from '@angular/core';
import News from '../../models/News';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input()
  article: News;

  constructor() { }

  ngOnInit(): void {}

}
