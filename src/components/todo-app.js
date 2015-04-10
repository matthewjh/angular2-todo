import {Component, Template} from 'angular2/angular2';
import {TodoEntryComponent} from 'components/todo-entry';
import {TodoListComponent} from 'components/todo-list';
import {TodoStore} from 'services/todo-store';

@Component({
  selector: 'todo-app',
  services: [TodoStore]
})
@Template({
  url: 'src/components/todo-app.html',
  directives: [TodoEntryComponent, TodoListComponent]
})
export class TodoAppComponent {}