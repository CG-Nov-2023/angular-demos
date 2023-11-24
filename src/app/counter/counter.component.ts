import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
    counter: number = 0;

    decCounter(){
      this.counter--;
    }

    incCounter(){
      this.counter++;
    }
}
