import {Component} from '@angular/core';
import Category from '../../models/Category';
import {CategoryService} from '../../services/category/category.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  categories: Category[] = [];
  isSmallScreen: boolean;

  constructor(private categoryService: CategoryService, breakpointObserver: BreakpointObserver) {
    categoryService.categories.subscribe(value => this.categories = value);
    breakpointObserver
      .observe([
        Breakpoints.Small,
        Breakpoints.XSmall,
      ])
      .subscribe(value => {
        console.log(value.matches);
        this.isSmallScreen = value.matches;
      });
  }
}
