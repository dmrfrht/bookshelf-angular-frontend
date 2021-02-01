import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Category} from '../models/category';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  apiUrl: string = `${environment.baseUrl}/category`;

  getCategories() {
    return this.httpClient.get<any>(this.apiUrl).pipe(map(result => result.data));
  }

  addCategory(category: Category) {
    return this.httpClient.post<any>(this.apiUrl, category);
  }
}
