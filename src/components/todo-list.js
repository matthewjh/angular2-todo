import {For, Component, Template} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {TodoStore} from 'src/services/todo-store';

@Component({
  selector: 'todo-list'
})
@Template({
  url: 'src/components/todo-list.html',
  directives: [For]
})
export class TodoListComponent {
  todos: Array;
  _todoStore: TodoStore;

  constructor(todoStore: TodoStore) {
    this._todoStore = todoStore;
    this.todos = todoStore.todos;
  }

  removeTodo(todo) {
    this._todoStore.removeTodo(todo);
  }
}