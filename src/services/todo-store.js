import {List, ListWrapper} from 'angular2/src/facade/collection';

export class TodoStore {
  todos: List;
  _nextTodoId: number;

  constructor() {
    this.todos = this._getCachedTodos() || ListWrapper.create();
    this._nextTodoId = 0;
  }

  addTodo(todo) {
    todo.id = this._nextTodoId;
    todo.isComplete = false;
    this.todos.push(todo);

    this._nextTodoId++;

    this._setCachedTodos();
  }

  removeTodo(todoToRemove) {
    ListWrapper.remove(this.todos, todoToRemove);

    this._setCachedTodos();
  }

  toggleTodo(todo) {
    todo.isComplete = true;

    this._setCachedTodos();
  }

  _getCachedTodos(): List {
    return JSON.parse(localStorage.getItem('todos'));
  }

  _setCachedTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}