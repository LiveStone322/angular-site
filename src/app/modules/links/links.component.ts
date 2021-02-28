import { Component, OnInit } from '@angular/core';
import { Langs } from 'src/app/shared/models/langs.model';
import { LanguagedText } from 'src/app/shared/models/languaged-text.model';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  public vk: LanguagedText = {
    [Langs.RU]: 'ВКонтакте',
    [Langs.ENG]: 'VKontakte'
  };
  public gh: LanguagedText = {
    [Langs.RU]: 'GitHub',
    [Langs.ENG]: 'GitHub'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
