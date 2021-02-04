import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../models/book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {
  }

  books: Book[];
  categoryId: string | any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id');

      if (this.categoryId) {
        this.bookService.getBooksByCategoryId(this.categoryId).subscribe(result => {
          this.books = result;
        });
      } else {
        this.bookService.getBook().subscribe(result => {
          this.books = result;
        });
      }
    });
  }

}
