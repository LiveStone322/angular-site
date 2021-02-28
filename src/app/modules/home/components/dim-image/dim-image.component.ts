import { Component, OnInit, ChangeDetectionStrategy, Input, HostListener, OnDestroy } from '@angular/core';
import { fromEvent, Subject, timer } from 'rxjs';
import { takeUntil, debounce, throttleTime } from 'rxjs/operators';
import { getWindowSize } from '../../../../shared/functions/getWindowSize'

@Component({
  selector: 'app-dim-image',
  templateUrl: './dim-image.component.html',
  styleUrls: ['./dim-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DimImageComponent implements OnInit, OnDestroy {

  @Input() name!: string;
  @Input() src = '';
  @Input() alt = '';
  @Input() deltaX = 30;
  @Input() deltaY = 30;
  @Input() depth = 1;

  private mouseMove$ = fromEvent(document, 'mousemove')
  private ngUnsubscribe = new Subject<never>();
  private img: HTMLElement;
  private windowWidth: number = 30;
  private windowHeight: number = 30;

  @HostListener('document:resize') resize() {
    this.updateWidthHeight();
  }

  constructor() { }

  ngOnInit(): void {
    this.updateWidthHeight();
    this.mouseMove$.pipe(throttleTime(17), takeUntil(this.ngUnsubscribe)).subscribe(({ clientX, clientY }: any) => {
      this.transform(clientX, clientY);
    })
  }

  ngAfterViewInit(): void {
    this.img = document.getElementById(this.name);
    this.img.ondragstart = function () { return false; };
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private transform(x, y): void {
    if (this.img) {
      this.img.style.transform = `translate3d(${(this.deltaX * x / this.windowWidth / this.depth) - this.deltaX / 2}px, ` +
        `${(this.deltaY * y / this.windowHeight / this.depth) - this.deltaY / 2}px, 0px)`;
    }
  }

  private updateWidthHeight() {
    const { width, height } = getWindowSize();
    this.windowWidth = width;
    this.windowHeight = height;
  }
}
