import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookHttpService } from '../book-http.service';

@Component({
  selector: 'app-book-view-http',
  templateUrl: './book-view-http.component.html',
  styleUrl: './book-view-http.component.css'
})
export class BookViewHttpComponent {
  fetchedBook: any = {
    bookId: 0,
    bookTitle: "",
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImageUrl: ""
  };

  constructor(private activatedRoute: ActivatedRoute,
              private bookHttpService: BookHttpService){
                this.fetchedBook = {
                  bookId: 0,
                  bookTitle: "",
                  bookAuthor: "",
                  bookGenre: "",
                  bookCost: 0,
                  bookImageUrl: ""
                };
              }

  ngOnInit(){
    
    console.log(this.fetchedBook);
    let bid = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.bookHttpService.getABook(bid).subscribe((response)=>{
      console.log(response);
      this.fetchedBook = response;
    })
  }

}
