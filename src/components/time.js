import {Component, Template} from 'angular2/angular2';

@Component({
  selector: 'time'
})
@Template({
  inline: '<div>{{ time }}</div>'
})
export class TimeComponent {
  constructor() {
    this.time = new Date();

    setInterval(() => {
      this.time = new Date();
    }, 100);
  }
}
