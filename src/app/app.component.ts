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
  notNull: boolean = true;

  @Output() todo: string | undefined | null;
  @Output() listOfTodos: string[] = [];

  onChange(event: any) {
    this.newTodo = event.target.value;
  }
  addTodo() {
    if (this.newTodo) {
      this.listOfTodos.push(this.newTodo);
      this.newTodo = '';
      this.notNull = true;
    } else {
      this.notNull = false;
    }
  }
}
