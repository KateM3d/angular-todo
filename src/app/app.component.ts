import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  subTitle: string = 'to do';
  newTodo: string = '';
  i: number | undefined;

  @Output() todo: string | undefined | null;
  @Output() listOfTodos: string[] = [];

  onChange(event: any) {
    console.log(event.target.value);
    this.newTodo = event.target.value;
  }
  addTodo() {
    this.listOfTodos.push(this.newTodo);
    this.newTodo = '';
    console.log(this.listOfTodos);
  }
}
