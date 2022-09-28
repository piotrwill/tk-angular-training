import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcomeText = 'Welcome to Telekom Tour of Heroes'

  getHello(name: string) {
      return `Hi ${name}`
   }
}
