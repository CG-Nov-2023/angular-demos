import { Component } from '@angular/core';

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

  addBook(myForm: any){
    console.log(myForm);
    console.log(this.newBook);
  }
}
