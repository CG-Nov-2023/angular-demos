import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { BookHttpService } from '../book-http.service';

@Component({
  selector: 'book-list-http',
  templateUrl: './book-list-http.component.html',
  styleUrl: './book-list-http.component.css'
})
export class BookListHttpComponent {

filterString: string = '';
allBooks: any[] = [];
filteredBooks: any[] = [];
  constructor(private bookHttpService: BookHttpService, 
              private router: Router){  }

  ngOnInit(){
    this.loadAllBooks();
  }

  loadAllBooks(){
    this.bookHttpService.getAllBooks().subscribe((response)=>{
      console.log(response);
      this.allBooks = response;
      this.filteredBooks = [...this.allBooks];
    });
  }

  filterBooks(){
    this.filteredBooks = this.allBooks.filter((eachBook)=>{
      return eachBook.bookTitle.startsWith(this.filterString)
    })  
  }

  deleteBook(bId: number){
   this.bookHttpService.removeBook(bId).subscribe((response)=>{
    console.log(response);
    this.loadAllBooks();
   });
  }

  editBook(bid: any){
    this.router.navigate(['book-edit', bid]);
  }

  addBook(){
    this.router.navigate(['book-add-http']);
  }

  viewBook(bid: any){
    this.router.navigate(['book-view', bid]);
  }

}
