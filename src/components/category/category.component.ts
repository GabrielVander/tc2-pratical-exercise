import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news/news.service';
import News from '../../models/News';
import {ActivatedRoute} from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  news: News[] = [];
  isSmallScreen: boolean;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver
  ) {
    newsService.news.subscribe(value => this.news = value);
    route.paramMap.subscribe(value => {
      // tslint:disable-next-line:radix
      this.newsService.getByCategoryId(parseInt(value.get('categoryId')));
    });
    breakpointObserver
      .observe([
        Breakpoints.Small,
        Breakpoints.XSmall,
      ])
      .subscribe(value => this.isSmallScreen = value.matches);
  }

  ngOnInit(): void {
  }

}
