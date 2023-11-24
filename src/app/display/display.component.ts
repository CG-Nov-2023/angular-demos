import { Component } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  // String movie = "Iron Man 1";
   movieName1: string = "Iron Man 1";
   movieName2: string = "Wonder Woman";
   movieName3: string = "";
   toggleMovie: boolean = true;

   showTheMovie(){
    if(this.toggleMovie){
      this.movieName3 = "Superman";
      this.toggleMovie = false;
    }else {
      this.movieName3 = "";
      this.toggleMovie = true;
    }
      
   }

}
