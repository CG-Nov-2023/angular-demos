import { Component } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  allBooks = [
    {
      bookId: 101,
      bookTitle: "Harry Potter and the Deathly Hallows",
      bookAuthor: "J.K.Rowling",
      bookGenre: "Fantasy",
      bookCost: 400,
      bookImageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      bookId: 102,
      bookTitle: "Harry Potter and the Order of Phoenix",
      bookAuthor: "J.K.Rowling",
      bookGenre: "Fantasy",
      bookCost: 450,
      bookImageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      bookId: 103,
      bookTitle: "Harry Potter and the Half Blood Prince",
      bookAuthor: "J.K.Rowling",
      bookGenre: "Fantasy",
      bookCost: 500,
      bookImageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

  ];

  deleteBook(bId: number){
    console.log(bId);
    for(let i=0;i<this.allBooks.length;i++){
      if(bId==this.allBooks[i].bookId){
        //remove the object at this index
        this.allBooks.splice(i, 1);
        break;
      }
    }

  }
}
