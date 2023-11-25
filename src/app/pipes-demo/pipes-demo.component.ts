import { Component } from '@angular/core';

@Component({
  selector: 'pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {
  text1: string = "hello";
  text2: string = "WELCOME";
  todaysDate: Date = new Date();
  marks: number = 455;
  amount: number = 300.67345;
  bookCost: number = 350;
  text3: string = "this string is split using custom pipe";
}
