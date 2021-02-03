import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private bookService: BookService
  ) {
  }

  books: Book[];

  ngOnInit() {
    this.bookService.getBook().subscribe(result => {
      this.books = result;
    });
  }

}
