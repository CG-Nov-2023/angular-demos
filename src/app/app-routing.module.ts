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

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'ngclass-demo', component: NgclassDemoComponent },
  { path: 'pipes-demo', component: PipesDemoComponent },
  { path: 'rainbow-color', component: RainbowColorComponent },
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'book-add', component: BookAddComponent },
  { path: 'book-edit/:bid', component: BookEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
