import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { RainbowColorComponent } from './rainbow-color/rainbow-color.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CounterComponent,
    RainbowColorComponent,
    BookListComponent,
    PipesDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
