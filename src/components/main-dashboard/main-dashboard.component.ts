import {Component} from '@angular/core';
import Category from '../../models/Category';
import {CategoryService} from '../../services/category/category.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ToolbarService} from '../../services/toolbar/toolbar.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  categories: Category[] = [];
  isSmallScreen: boolean;

  constructor(
    private categoryService: CategoryService,
    private breakpointObserver: BreakpointObserver,
    private toolbarService: ToolbarService
  ) {
    categoryService
      .categories
      .subscribe(value => this.categories = value);

    breakpointObserver
      .observe([
        Breakpoints.Small,
        Breakpoints.XSmall,
      ])
      .subscribe(value => this.isSmallScreen = value.matches);
    toolbarService.updateTitle('Dashboard');
  }

  categorySelected(id: number): void {
    console.log(id);
  }
}
