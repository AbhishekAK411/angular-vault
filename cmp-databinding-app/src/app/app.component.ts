import { Component } from '@angular/core';

interface ServerElements {
  type: string;
  name: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElements[] = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    })
  }

  onAddBlueprint() {
     this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
     })
  }
}
