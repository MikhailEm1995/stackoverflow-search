import { Component } from '@angular/core';
import {routerTransition} from './animations/router-transition';

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
