import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {MaterialModule} from '../modules/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {MainLayoutComponent} from '../layouts/main-layout/main-layout.component';
import {AdminLayoutComponent} from '../layouts/admin-layout/admin-layout.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from '../nav/header/header.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminCategoryNeweditComponent} from './admin-category-newedit/admin-category-newedit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminCategoryListComponent} from './admin-category-list/admin-category-list.component';
import {AdminBookNeweditComponent} from './admin-book-newedit/admin-book-newedit.component';
import {AdminBookListComponent} from './admin-book-list/admin-book-list.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AdminLayoutComponent,
    HomeComponent,
    HeaderComponent,
    AdminHomeComponent,
    AdminCategoryNeweditComponent,
    AdminCategoryListComponent,
    AdminBookNeweditComponent,
    AdminBookListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PageModule {
}
