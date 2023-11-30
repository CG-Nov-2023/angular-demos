import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookHttpService } from '../book-http.service';

@Component({
  selector: 'app-book-add-http',
  templateUrl: './book-add-http.component.html',
  styleUrl: './book-add-http.component.css'
})
export class BookAddHttpComponent {
  newBook = {
    bookId: 0,
    bookTitle: "",
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImageUrl: ""
  }

  constructor(private bookHttpService: BookHttpService, private router:Router){}

  addBook(myForm: any){
    //this.bookHttpService.addBook(this.newBook);
    this.router.navigate(['book-list']);
  }
}
