import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminCategoryNeweditComponent } from './pages/admin-category-newedit/admin-category-newedit.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    "path": "",
    "component": MainLayoutComponent,
    "children": [
      {
        "path": "",
        "component": HomeComponent
      }
    ]
  },
  {
    "path": "admin",
    "component": AdminLayoutComponent,
    "children": [
      {
        "path": "",
        "component": AdminHomeComponent
      },
      {
        "path": "category",
        "component": AdminCategoryNeweditComponent
      },
      {
        "path": "category/:id",
        "component": AdminCategoryNeweditComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
