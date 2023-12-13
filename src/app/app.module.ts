import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RainbowColorComponent } from './rainbow-color/rainbow-color.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { SplitPipePipe } from './pipes-demo/custom-pipe/split-pipe.pipe';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-list/to-do-item/to-do-item.component';
import { NgclassDemoComponent } from './ngclass-demo/ngclass-demo.component';
import { BookAddComponent } from './books/book-add/book-add.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookViewComponent } from './books/book-view/book-view.component';
import { HeaderComponent } from './header/header.component';
import { BookListHttpComponent } from './books-http/book-list-http/book-list-http.component';
import { BookAddHttpComponent } from './books-http/book-add-http/book-add-http.component';
import { BookEditHttpComponent } from './books-http/book-edit-http/book-edit-http.component';
import { BookViewHttpComponent } from './books-http/book-view-http/book-view-http.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './users-http/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CounterComponent,
    RainbowColorComponent,
    BookListComponent,
    PipesDemoComponent,
    SplitPipePipe,
    ToDoListComponent,
    ToDoItemComponent,
    NgclassDemoComponent,
    BookAddComponent,
    BookEditComponent,
    BookViewComponent,
    HeaderComponent,
    BookListHttpComponent,
    BookAddHttpComponent,
    BookEditHttpComponent,
    BookViewHttpComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
