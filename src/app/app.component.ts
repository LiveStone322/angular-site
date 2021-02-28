import { query, transition, trigger, style, group, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { getWindowSize } from './shared/functions/getWindowSize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2, 1 => 3, 1 => 4, 2 => 3, 2 => 4, 3 => 4', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)', opacity: 0 })),
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        group([
          query(':leave', [
            animate('.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)', opacity: 0 })),
          ]),
          query(':enter', animate('.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)', opacity: 1 }))),
        ]),
      ]),
      transition('4 => 1, 4 => 2, 4 => 3, 3 => 1, 3 => 2, 2 => 1', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)', opacity: 0 })),
        query(':enter, :leave', style({ position: 'absolute', width: '100%', paddingRight: '31px' })),
        group([
          query(':leave', [
            animate('.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)', opacity: 0 })),
          ]),
          query(':enter', animate('.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)', opacity: 1 }))),
        ]),
      ]),
    ])
  ]
})
export class AppComponent implements OnInit {
  public title = 'my-site';
  public isMobile = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  @HostListener('window:resize') onResize() {
    this.updateIsMobile();
  }

  ngOnInit() {
    this.updateIsMobile();
  }

  public getRouteClass(): string {
    const path = this.activatedRoute.snapshot.firstChild?.routeConfig.path;
    if (!path) return ''

    return 'path_' + path
  }

  public getId(outlet: RouterOutlet) {
    return outlet.activatedRouteData['id'];
  }

  private getViewWidth(): number {
    return getWindowSize().width;
  }

  private getIsMobile(): boolean {
    return this.getViewWidth() < 768;
  }

  private updateIsMobile(): void {
    this.isMobile = this.getIsMobile();
  }
}
