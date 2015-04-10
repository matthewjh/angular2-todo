import {Component, Template} from 'angular2/angular2';
import {TimeComponent} from 'components/time';

@Component({
  selector: 'todo-app'
})
@Template({
  url: 'src/components/todo-app.html',
  directives: [TimeComponent]
})
export class TodoAppComponent {
}