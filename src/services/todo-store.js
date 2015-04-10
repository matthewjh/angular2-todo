export class TodoStore {
  constructor() {
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
    console.log(this.todos);
  }
}