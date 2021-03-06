import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news/news.service';
import News from '../../models/News';
import {ActivatedRoute} from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {CategoryService} from '../../services/category/category.service';
import {ToolbarService} from '../../services/toolbar/toolbar.service';

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
    private breakpointObserver: BreakpointObserver,
    private categoryService: CategoryService,
    private toolbarService: ToolbarService
  ) {
    newsService.news.subscribe(value => this.news = value);
    route.paramMap.subscribe(value => {
      // tslint:disable-next-line:radix
      const categoryId = parseInt(value.get('categoryId'));
      console.log(categoryId);
      this.newsService.getByCategoryId(categoryId);
      const category = this.categoryService.getCategoryById(categoryId);
      this.toolbarService.updateTitle(category.name);
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
