import { Injectable } from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class LoggerService {

  constructor(private router: Router) {
    router.events.subscribe(event => this.routerLogger(event));
  }

  
  routerLogger(event: any): void {
    if (event instanceof NavigationEnd) {
      console.log('NavigationEnd: ', event.url);
    }
    if (event instanceof NavigationStart) {
      console.log('NavigationStart: ', event.url);
    }
  }
}