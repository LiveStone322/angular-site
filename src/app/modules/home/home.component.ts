import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(50vh)' }),
        animate('1s 0.35s cubic-bezier(0,.5,.1,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInRight', [
      transition('void => *', [

        style({ opacity: 0, transform: 'translateX(50vh)' }),
        animate('1s cubic-bezier(0,.5,.1,1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
