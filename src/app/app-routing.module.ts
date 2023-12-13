import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { NgclassDemoComponent } from './ngclass-demo/ngclass-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { RainbowColorComponent } from './rainbow-color/rainbow-color.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookAddComponent } from './books/book-add/book-add.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookViewComponent } from './books/book-view/book-view.component';
import { BookListHttpComponent } from './books-http/book-list-http/book-list-http.component';
import { BookAddHttpComponent } from './books-http/book-add-http/book-add-http.component';
import { BookEditHttpComponent } from './books-http/book-edit-http/book-edit-http.component';
import { BookViewHttpComponent } from './books-http/book-view-http/book-view-http.component';
import { UserLoginComponent } from './users-http/user-login/user-login.component';
import { UserLogoutComponent } from './users-http/user-logout/user-logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: UserLoginComponent },
  { path: 'logout', component: UserLogoutComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'ngclass-demo', component: NgclassDemoComponent },
  { path: 'pipes-demo', component: PipesDemoComponent },
  { path: 'rainbow-color', component: RainbowColorComponent },
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'book-add', component: BookAddComponent },
  { path: 'book-edit/:bid', component: BookEditComponent},
  { path: 'book-view/:bookId', component: BookViewComponent},
  { path: 'book-list-http', component: BookListHttpComponent },
  { path: 'book-add-http', component: BookAddHttpComponent },
  { path: 'book-edit-http/:bid', component: BookEditHttpComponent},
  { path: 'book-view-http/:bookId', component: BookViewHttpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
