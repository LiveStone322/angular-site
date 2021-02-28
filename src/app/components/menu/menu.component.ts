import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Langs } from 'src/app/shared/models/langs.model';
import { LanguagedText } from 'src/app/shared/models/languaged-text.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  public who: LanguagedText = {
    [Langs.RU]: 'Кто я? 🗿',
    [Langs.ENG]: 'About me'
  };
  public links: LanguagedText = {
    [Langs.RU]: 'Контакты',
    [Langs.ENG]: 'Social links'
  };

  @Input() isMobile = false;

  constructor() { }

  ngOnInit(): void {
  }
}
