import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../services/category/category.service';
import Category from '../models/Category';
import {ToolbarService} from '../services/toolbar/toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  subtitle = '';
  categories: Category[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private toolbarService: ToolbarService
  ) {
    categoryService.categories.subscribe(categories => this.categories = categories);
    toolbarService.title.subscribe(title => this.title = title);
  }

  ngOnInit(): void {
  }
}
