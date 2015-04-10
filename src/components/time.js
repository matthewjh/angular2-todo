import {Component, Template} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {Time} from 'services/time';

@Component({
  selector: 'time',
  services: [Time]
})
@Template({
  url: 'src/components/time.html'
})
export class TimeComponent {
  constructor(@Inject(Time) time) {
    this.time = time.toString();

    setInterval(() => {
      this.time = time.toString();
    }, 100);
  }
}
