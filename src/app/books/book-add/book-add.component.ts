import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'book-add',
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  newBook = {
    bookId: 0,
    bookTitle: "",
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImageUrl: ""
  }

  constructor(private bookService: BookService, private router:Router){}

  addBook(myForm: any){
    console.log(myForm);
    console.log(this.newBook);

    // push the newBook object to the allBooks array in bookService
    // for this we need BookService for this
    // inject BookService in this component
    this.bookService.addBook(this.newBook);

    // here once the book is added the array
    // we can navigate back to book-list
    this.router.navigate(['book-list']);
  }
}
