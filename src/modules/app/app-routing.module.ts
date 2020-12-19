import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from '../../components/category/category.component';
import {MainDashboardComponent} from '../../components/main-dashboard/main-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard',
      subtitle: 'Pick a category to start',
    },
    component: MainDashboardComponent,
  },
  {
    path: 'category/:categoryId',
    component: CategoryComponent,
    data: {
      title: 'Category',
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
