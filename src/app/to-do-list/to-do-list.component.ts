import { Component } from '@angular/core';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {

  newTask: string = '';
  allToDos = [{
    todoId: 1,
    todoTask: 'Laundry' 
  },
  {
    todoId: 2,
    todoTask: 'Call Auditor' 
  },
]

addToTasks(){
  
  let newTaskObject = {
    todoId: (this.allToDos.length==0)?1:this.allToDos[this.allToDos.length-1].todoId + 1,
    todoTask: this.newTask
  }

  this.allToDos.push(newTaskObject)

  this.newTask = '';
}

removeTask(todoId:any){
  // remove the object with todoId from the array allToDos
  this.allToDos = this.allToDos.filter((eachTodo)=>eachTodo.todoId!=todoId);
}
}
