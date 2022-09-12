import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  completed: boolean = false;
  @Input() todo: string = '';
  @Input() listOfTodos: string[] = [];
  edit: boolean = false;
  newValue: string = '';
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
    const index = this.listOfTodos.indexOf(this.todo);
    this.listOfTodos.splice(index, 1, value);
    this.edit = false;
  }

  onCancel() {
    this.edit = false;
  }
}
