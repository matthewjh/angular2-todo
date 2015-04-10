import {Component, Template} from 'angular2/angular2';
import {TimeComponent} from 'components/time';
import {TodoEntryComponent} from 'components/todo-entry';

@Component({
  selector: 'todo-app'
})
@Template({
  url: 'src/components/todo-app.html',
  directives: [TimeComponent, TodoEntryComponent]
})
export class TodoAppComponent {
}