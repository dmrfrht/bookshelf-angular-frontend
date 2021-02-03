import {Component, OnInit, ViewChild} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../models/book';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {

  constructor(private bookService: BookService) {
  }

  books: Book[];
  dataSource;
  displayedColumns: string[] = ['no', 'picture', 'title', 'author', 'price', 'stock', 'categoryName', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.bookService.getBook().subscribe(result => {
      this.books = result;
      this.books.forEach((book, index) => {
        this.books[index]['no'] = index + 1;
      });

      this.dataSource = new MatTableDataSource<Book>(this.books);
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(bookId: string) {
    this.bookService.deleteBook(bookId).subscribe(result => {
      if (result.status === 'success') {
        const book = this.books.filter(x => x._id === bookId)[0];
        const index = this.books.indexOf(book);

        this.books.splice(index, 1);

        this.dataSource = new MatTableDataSource<Book>(this.books);
      } else {
        alert('silme işlemi sırasında bir hata oluştur');
      }
    });
  }

}
