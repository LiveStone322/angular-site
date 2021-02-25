import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-site';

  constructor(private route: ActivatedRoute) {

  }

  getRouteClass(): string {
    const path = this.route.snapshot.firstChild?.routeConfig.path;
    if (!path) return ''

    return 'path_' + path
  }
}
