import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoElements = [{type: 'normal', name: 'Angular Task', content: 'Clear every task on Angular Zettacamp'}];

  onTodoAdded(normalData: {todoName: string, todoContent: string}) {
    this.todoElements.push({
      type: 'normal',
      name: normalData.todoName,
      content: normalData.todoContent
    });
  }

  onImportantAdded(importantData: {todoName: string, todoContent: string}) {
    this.todoElements.push({
      type: 'important',
      name: importantData.todoName,
      content: importantData.todoContent
    });
  }

  onChangeFirst() {
    this.todoElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.todoElements.splice(0, 1);
  }

 
}
