export class TodoStore {
  todos: Array;
  _nextTodoId: number;

  constructor() {
    this.todos = [];
    this._nextTodoId = 0;
  }

  addTodo(todo) {
    todo.id = this._nextTodoId;
    this.todos.push(todo);

    this._nextTodoId++;
  }

  removeTodo(todoToRemove) {
    console.log('here');
    var index = this.todos.findIndex((todo) => todo.id === todoToRemove.id);

    this.todos.splice(index, 1);
  }
}