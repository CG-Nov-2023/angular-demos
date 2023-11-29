import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

//@Autowired
//bookService: BookService | undefined;
filterString: string = '';
allBooks: any[] = [];
filteredBooks: any[] = [];
  constructor(private bookService: BookService, 
              private router: Router){
    //this.bookService = bookService;
    
  }

  ngOnInit(){
    this.allBooks = this.bookService.getAllBooks();
    this.filteredBooks = [...this.allBooks];
  }
  // allBooks = [
  //   {
  //     bookId: 101,
  //     bookTitle: "Harry Potter and the Deathly Hallows",
  //     bookAuthor: "J.K.Rowling",
  //     bookGenre: "Fantasy",
  //     bookCost: 400,
  //     bookImageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     bookId: 102,
  //     bookTitle: "Harry Potter and the Order of Phoenix",
  //     bookAuthor: "J.K.Rowling",
  //     bookGenre: "Fantasy",
  //     bookCost: 450,
  //     bookImageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     bookId: 103,
  //     bookTitle: "Harry Potter and the Half Blood Prince",
  //     bookAuthor: "J.K.Rowling",
  //     bookGenre: "Fantasy",
  //     bookCost: 500,
  //     bookImageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   },

  // ];

  filterBooks(){
    this.filteredBooks = this.allBooks.filter((eachBook)=>{
      return eachBook.bookTitle.startsWith(this.filterString)
    })
    
  }

  deleteBook(bId: number){
    console.log(bId);
    this.bookService.removeBook(bId);
  }

  editBook(bid: any){
    // here navigate to book-edit component
    // we should also send the route parameter
    this.router.navigate(['book-edit', bid]);
  }

  addBook(){
    // here navigate to book-add component
    // for this we need Router api
    // inject Router in the constructor of component
    // and then use router to navigate to book-add
    this.router.navigate(['book-add']);
  }

  viewBook(bid: any){
    // here navigate to book-view
    this.router.navigate(['book-view', bid]);

  }

}
