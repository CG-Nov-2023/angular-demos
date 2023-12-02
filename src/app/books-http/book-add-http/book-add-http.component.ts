import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookHttpService } from '../book-http.service';
import { AuthorHttpService } from '../../authors-http/author-http.service';

@Component({
  selector: 'app-book-add-http',
  templateUrl: './book-add-http.component.html',
  styleUrl: './book-add-http.component.css'
})
export class BookAddHttpComponent {
  newBook = {
    bookId: 0,
    bookTitle: "",
    authorPojo: {
      authorId: 0
    },
    bookGenre: "",
    bookCost: 0,
    bookImageUrl: ""
  }

  allAuthors: any[] = [];

  constructor(private bookHttpService: BookHttpService,
              private authorHttpService: AuthorHttpService, 
              private router:Router){}

  ngOnInit(){
    console.log("in ngOnInit");
    this.authorHttpService.getAllAuthors().subscribe((response)=>{
      console.log(response);
      this.allAuthors = response;
    });
  }

  addBook(){
    // here we should sedn the form data to the back end to get inserted in DB
    this.bookHttpService.addBook(this.newBook).subscribe((response)=>console.log(response));
    // once book is sent to the backend and added to db, we can naviagte 
        //to book-list-http
    this.router.navigate(['book-list-http']);
  }
}
