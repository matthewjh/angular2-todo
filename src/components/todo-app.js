import {Component, Template} from 'angular2/angular2';
import {TimeComponent} from 'components/time';

@Component({
  selector: 'todo-app'
})
@Template({
  inline: '<b><time></time>Todo App!</b>',
  directives: [TimeComponent]
})
export class TodoAppComponent {
}