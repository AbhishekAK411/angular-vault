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
  serverName = '';
  serverContent = '';

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.serverName,
      content: this.serverContent
    })
  }

  onAddServerBlueprint() {
     this.serverElements.push({
      type: 'blueprint',
      name: this.serverName,
      content: this.serverContent
     })
  }
}
