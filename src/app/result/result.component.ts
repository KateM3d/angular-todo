import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  completed: boolean = false;
  @Input() todo: string | undefined;
  @Input() listOfTodos: string[] = [];
  edit: boolean = false;
  newValue: string | undefined = '';
  newEditValue: string | undefined;
  constructor() {}

  ngOnInit(): void {}

  onCompleted(event: any) {
    this.completed = !this.completed;
  }

  onEdit(event: any) {
    this.edit = true;
    this.newValue = this.todo;
  }

  onDelete(value: any) {
    const index: number = this.listOfTodos.indexOf(value);
    this.listOfTodos.splice(index, 1);
  }

  onEditChange(event: any) {
    this.newValue = event.target.value;
  }

  onSave(value: any) {
    const index: number = this.listOfTodos.indexOf(value);
    this.listOfTodos.splice(index, 1);
    this.listOfTodos.push(value);
    this.edit = false;
    console.log(this.listOfTodos);
  }

  onCancel() {
    this.edit = false;
  }
}
