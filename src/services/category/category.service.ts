import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../api/api.service';
import {catchError, map} from 'rxjs/operators';
import CategoryResponse from '../../models/api/CategoryResponse';
import Category from '../../models/Category';
import {ColorService} from '../color/color.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public static categoryEndpoint = 'categorias/';
  private $categories: BehaviorSubject<Category[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient, private colorService: ColorService) {
    this.http
      .get<CategoryResponse[]>(`${ApiService.baseAPIEndpoint + CategoryService.categoryEndpoint}listar.php`)
      .pipe(
        map(
          response => response.map(
            (value, index) => this.toCategory(value, index)
          )
        ),
        catchError(err => {
          console.error(err);
          return [];
        })
      )
      .subscribe(value => this.categories.next(value));
  }

  get categories(): BehaviorSubject<Category[]> {
    return this.$categories;
  }

  set categories(value: BehaviorSubject<Category[]>) {
    this.$categories = value;
  }

  public getCategoryById(id: number): Category {
    return this.categories
      .value
      .find(category => category.id === id);
  }

  private toCategory(categoryResponse: CategoryResponse, index: number): Category {
    return {
      ...categoryResponse,
      name: categoryResponse.nome,
      color: this.colorService.getColor(index),
    };
  }

}
