import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownButtonComponent implements OnInit {

  public items: string[] = ['RU', 'ENG'];
  public active = false;

  constructor() { }

  ngOnInit(): void {
  }

  onExpandClick(): void {
    this.active = !this.active;
  }

  onItemClick(idx: number): void {
    if (this.active) console.log(this.items[idx]);
  }
}
