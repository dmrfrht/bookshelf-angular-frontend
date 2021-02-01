import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../models/category';
import {CategoryService} from '../../service/category.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService) {
  }

  categories: Category[];
  dataSource;
  displayedColumns: string[] = ['no', 'name', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
      this.categories.forEach((category, index) => {
        this.categories[index]["no"] = index + 1;
      });

      this.dataSource = new MatTableDataSource<Category>(this.categories);

      this.dataSource.paginator = this.paginator;
    });
  }

}
