import { Component } from '@angular/core';
 
@Component({
  selector: 'app-warning-alert',
  template: `
    <p>This is a self destruct message please proceed with caution!</p>
  `,
  styles: [
    `
      p {
        padding: 20px;
        width: 60%;
        border-radius: 15px;
        background-color: red;
        color: white;
        font-size: 16px;
        text-transform: uppercase;
      }
    `
  ]
})
export class WarningAlertComponent {

}