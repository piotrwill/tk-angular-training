import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  welcomeText = 'Welcome to Telekom Tour of Heroes'
  activeRouteName?: string = "unbekannt"

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      console.log('router event arrived', JSON.stringify(event.routerEvent, null, 2))
      if (!event.routerEvent?.url) {
        return
      }
      const activeRoute = this.router.config.filter((r) => `/${r.path}` === event.routerEvent.url)
      this.activeRouteName = activeRoute.length > 0 ? activeRoute[0].title?.toString() : 'nicht gefunden'
    })
  }
  ngOnInit(): void {
  }

  getHello(name: string) {
      return `Hi ${name}`
   }
}
