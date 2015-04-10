import {List, ListWrapper} from 'angular2/src/facade/collection';

export class TodoStore {
  todos: List;
  _nextTodoId: number;

  constructor() {
    this.todos = ListWrapper.create();
    this._nextTodoId = 0;
  }

  addTodo(todo) {
    todo.id = this._nextTodoId;
    todo.isComplete = false;
    this.todos.push(todo);

    this._nextTodoId++;
  }

  removeTodo(todoToRemove) {
    ListWrapper.remove(this.todos, todoToRemove);
  }
}