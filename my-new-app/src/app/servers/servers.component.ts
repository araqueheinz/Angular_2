import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus: string = 'No server was created';
  // set a variable that will hold the server name
  serverName: string = '';
  ngModelServerName: string ='test server'
  // Combing all forms of data binding variable
  newServerName: string = '';

  //ng Directive
  newServerNameForDirectives: string = '';
  newServerCreatedForDirectives: string = 'ngif directive No server has been created!'
  serverCreated: boolean = false;

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    } ,2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = ' Server was Created!';

  }
  onUpdateServerName(event) {
    console.log('%c event:', 'color: Orange; font-weight: bold;', `${event.target.value}`);
    // we use (<HTMLInputElement>event.target).value because that's how typescript deals with event.target that comes from the dom
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onCreateNewServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.newServerName}`;
  }
  onCreateNewServerForDirectives() {
    this.serverCreated = true;
    this.newServerCreatedForDirectives = `Server was created! Name is ${this.newServerNameForDirectives}`;
  }


}
