import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {CategoryService} from '../../service/category.service';
import {Book} from '../../models/book';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../models/category';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-admin-book-newedit',
  templateUrl: './admin-book-newedit.component.html',
  styleUrls: ['./admin-book-newedit.component.css']
})
export class AdminBookNeweditComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private categoryService: CategoryService
  ) {
  }

  formData: FormData = null;
  bookId: string;
  book: Book;
  bookForm: FormGroup;
  title: string;
  btnText: string;
  type: string;
  categories: Category[];

  upload(files) {
    const fileData = files.target.files[0];
    this.formData = new FormData();
    this.formData.append('picture', fileData);
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
    });

    this.bookId = this.route.snapshot.paramMap.get('id');

    if (this.bookId == null) {
      this.title = 'Kitap Ekle';
      this.btnText = 'Ekle';
      this.type = 'add';
    } else {
      this.title = 'Kitap Güncelle';
      this.btnText = 'Güncelle';
      this.type = 'edit';
      this.bookService.getBookById(this.bookId).subscribe(result => {
        this.book = result;
        this.bookForm.controls.title.setValue(this.book.title);
        this.bookForm.controls.author.setValue(this.book.author);
        this.bookForm.controls.price.setValue(this.book.price);
        this.bookForm.controls.stock.setValue(this.book.stock);
        this.bookForm.controls.picture.setValue(this.book.picture);
        this.bookForm.controls.categoryBy.setValue(this.book.categoryBy);
      });
    }

    this.bookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
      picture: new FormControl(''),
      categoryBy: new FormControl('')
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      if (this.type === 'add') {
        this.bookService.saveBookImage(this.formData)
          .pipe(
            map(result => {
              this.bookForm.controls.picture.setValue(result.url);
            }),
            mergeMap(() => this.bookService.addBook(this.bookForm.value))
          )
          .subscribe(result => {
            this.router.navigateByUrl('/admin');
          });
      } else {
        if (this.formData == null) { // resim seçmemiş
          this.bookService.updateBook(this.book._id, this.bookForm.value).subscribe(result => {
            this.router.navigateByUrl('/admin');
          });
        } else {
          this.bookService.saveBookImage(this.formData)
            .pipe(
              map(result => {
                this.bookForm.controls.picture.setValue(result.url);
              }),
              mergeMap(() => this.bookService.updateBook(this.book._id, this.bookForm.value))
            )
            .subscribe(result => {
              this.router.navigateByUrl('/admin');
            });
        }
      }
    }
  }

  displayCategoryName(category) {
    if (category) {
      return category.name;
    }

    return null;
  }

}
