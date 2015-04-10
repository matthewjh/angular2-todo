import {Component, Template} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {TodoStore} from 'services/todo-store';

@Component({
  selector: 'todo-entry'
})
@Template({
  url: 'src/components/todo-entry.html'
})
export class TodoEntryComponent {
  constructor(@Inject(TodoStore) todoStore) {
    this._todoStore = todoStore;
  }

  enterTodo($event, inputElement) {
    const ENTER_KEYCODE = 13;
    var keycode = $event.which;

    if (keycode === ENTER_KEYCODE && inputElement.value.trim()) {
      this._todoStore.addTodo({
        text: inputElement.value
      });

      inputElement.value = '';
    }
  }
}