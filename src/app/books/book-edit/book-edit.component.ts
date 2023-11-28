import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {

constructor(private bookService: BookService){}

ngOnInit(){
  // for now we are harfd coding the value of bookId
  // later this value will come as a route parameter
  let bookId = 103;

  let fetchedBook = this.bookService.getABook(bookId);
  this.myReactiveForm.setValue(fetchedBook);

}

// here we will create a FormGroup object 
    // which will hold all the FormControl objects

myReactiveForm: FormGroup = new FormGroup({
  bookId: new FormControl(''),
  bookTitle: new FormControl('', [Validators.required, Validators.minLength(3)]),
  bookAuthor: new FormControl(),
  bookGenre: new FormControl(),
  bookCost: new FormControl('', Validators.required),
  bookImageUrl: new FormControl()
});

editBook(){
  console.log(this.myReactiveForm);
  console.log(this.myReactiveForm.value);

  // call updateBook() of bookService
  this.bookService.updateBook(this.myReactiveForm.value);
}
}
