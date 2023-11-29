import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.css'
})
export class BookViewComponent {

  fetchedBook: any;

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService){}

  ngOnInit(){
    let bid = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.fetchedBook = this.bookService.getABook(bid);
  }

}
