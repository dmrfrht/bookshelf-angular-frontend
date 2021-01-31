import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../modules/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../nav/header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AdminLayoutComponent,
    HomeComponent,
    HeaderComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ]
})
export class PageModule { }
