import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMessage: boolean = true;
  log = [];
  dates = []

  onCounter() {
    this.log = [...this.log, this.log.length + 1];
  }

  onCounterTimeStamp() {
    this.dates = [...this.dates, new Date()]
  }
}
