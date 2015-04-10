import {Component, Template} from 'angular2/angular2';
import {TimeComponent} from 'components/time';

@Component({
  selector: 'todo-app'
})
@Template({
  inline: '<b><time></time>Todo App! <button (click)="" ></button></b>',
  directives: [TimeComponent]
})
export class TodoAppComponent {
  construct() {
  }
}