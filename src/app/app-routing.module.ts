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
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: UserLoginComponent },
  { path: 'logout', component: UserLogoutComponent },
  { path: 'counter', component: CounterComponent, canActivate: [LoginGuard] },
  { path: 'display', component: DisplayComponent, canActivate: [LoginGuard]  },
  { path: 'ngclass-demo', component: NgclassDemoComponent, canActivate: [LoginGuard]  },
  { path: 'pipes-demo', component: PipesDemoComponent, canActivate: [LoginGuard] },
  { path: 'rainbow-color', component: RainbowColorComponent , canActivate: [LoginGuard] },
  { path: 'to-do-list', component: ToDoListComponent , canActivate: [LoginGuard] },
  { path: 'book-list', component: BookListComponent, canActivate: [LoginGuard]  },
  { path: 'book-add', component: BookAddComponent , canActivate: [LoginGuard] },
  { path: 'book-edit/:bid', component: BookEditComponent, canActivate: [LoginGuard] },
  { path: 'book-view/:bookId', component: BookViewComponent, canActivate: [LoginGuard] },
  { path: 'book-list-http', component: BookListHttpComponent, canActivate: [LoginGuard]  },
  { path: 'book-add-http', component: BookAddHttpComponent , canActivate: [LoginGuard] },
  { path: 'book-edit-http/:bid', component: BookEditHttpComponent, canActivate: [LoginGuard] },
  { path: 'book-view-http/:bookId', component: BookViewHttpComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
