import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() i: number | undefined;
  completed: boolean = false;
  @Input() todo: string | undefined;
  @Input() listOfTodos: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  onCompleted(event: any) {
    this.completed = !this.completed;
  }

  onEdit(event: any) {
    console.log('edit');
  }

  onDelete(value: any) {
    console.log('deleted!');
    const index: number = this.listOfTodos.indexOf(value);
    this.listOfTodos.splice(index, 1);
    console.log(this.listOfTodos);
  }
}
