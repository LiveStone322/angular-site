import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Langs } from '../models/langs.model';
import { LanguagedText } from '../models/languaged-text.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() texts: LanguagedText = {
    [Langs.RU]: '',
    [Langs.ENG]: ''
  };
  @Input() isBig = false;
  @Input() isActive = false;

  constructor() { }

  ngOnInit(): void {
  }
}
