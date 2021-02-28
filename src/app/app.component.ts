import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getWindowSize } from './shared/functions/getWindowSize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'my-site';
  public isMobile = false;

  constructor(private route: ActivatedRoute) {

  }

  @HostListener('window:resize') onResize() {
    this.updateIsMobile();
  }

  ngOnInit() {
    this.updateIsMobile();
  }

  public getRouteClass(): string {
    const path = this.route.snapshot.firstChild?.routeConfig.path;
    if (!path) return ''

    return 'path_' + path
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
