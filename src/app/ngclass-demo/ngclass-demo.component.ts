import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './ngclass-demo.component.html',
  styleUrl: './ngclass-demo.component.css'
})
export class NgclassDemoComponent {
  allStudents = [{
    studId: 101,
    studName: "ABC",
    studMark: 80
  },
  {
    studId: 102,
    studName: "XYZ",
    studMark: 40
  },{
    studId: 103,
    studName: "LMN",
    studMark: 60
  },{
    studId: 104,
    studName: "QWE",
    studMark: 25
  }];
}
