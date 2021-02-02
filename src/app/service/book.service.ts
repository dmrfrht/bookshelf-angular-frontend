import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/book';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  apiUrl: string = `${environment.baseUrl}/book`;

  getBook() {
    return this.httpClient.get<any>(this.apiUrl).pipe(map(result => result.data));
  }

  addBook(book: Book) {
    return this.httpClient.post<any>(this.apiUrl, book);
  }

  saveBookImage(image: string | any) {
    return this.httpClient.post<any>(`${this.apiUrl}/saveImage`, image);
  }
}
