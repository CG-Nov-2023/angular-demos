import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css'
})
export class ToDoItemComponent {
@Input() todoItem: any;
@Output() notifyDone = new EventEmitter(); 

removeTask(id: any){
  this.notifyDone.emit(id); 
  // this will emit the event to the parent component
}
}
