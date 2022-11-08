import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {
  @Output() todoCreated = new EventEmitter<{todoName: string, todoContent: string}> ();
  @Output('imC') importantCreated = new EventEmitter<{todoName: string, todoContent: string}> ();

  @ViewChild('todoContentInput') todoContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddTodo(nameInput : HTMLInputElement) {
    this.todoCreated.emit({
      todoName : nameInput.value,
      todoContent: this.todoContentInput.nativeElement.value
    });
  }

  onAddImportant(nameInput : HTMLInputElement) {
    this.importantCreated.emit({
      todoName : nameInput.value,
      todoContent: this.todoContentInput.nativeElement.value
    });
  }

}
