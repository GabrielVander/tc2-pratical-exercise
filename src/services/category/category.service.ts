import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../api/api.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import CategoryResponse from '../../models/api/CategoryResponse';
import Category from '../../models/Category';
import {ColorService} from '../color/color.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public static categoryEndpoint = 'categorias/';

  constructor(private http: HttpClient, private colorService: ColorService) {}

  public get categories(): Observable<Category[]> {
    return this.http
      .get<CategoryResponse[]>(`${ApiService.baseAPIEndpoint + CategoryService.categoryEndpoint}listar.php`)
      .pipe(
        map(response => response.map((value, index) => this.toCategory(value, index))),
        catchError(err => {
          console.error(err);
          return [];
        })
      );
  }

  private toCategory(categoryResponse: CategoryResponse, index: number): Category {
    return {
      ...categoryResponse,
      name: categoryResponse.nome,
      color: this.colorService.getColor(index),
    };
  }
}
