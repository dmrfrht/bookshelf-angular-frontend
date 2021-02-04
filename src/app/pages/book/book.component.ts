import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../models/book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {
  }

  book: Book = new Book();
  bookId: string | any;

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');

    this.bookService.getBookById(this.bookId).subscribe(result => {
      this.book = result;
    });
  }

}
