import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { GetLang, UpdateLang } from 'src/app/store/actions/lang.actions';
import { Langs } from '../models/langs.model';

/**Todo
 * сделать выбор на основе состояния в ngrx
*/
@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownButtonComponent implements OnInit {

  public items: string[] = Object.keys(Langs).filter((val) => isNaN(Number(val)))
  public active = false;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onExpandClick(): void {
    this.active = !this.active;
  }

  onItemClick(idx: number): void {
    if (this.active) {
      const item = this.items[idx];
      this.items[idx] = this.items[0];
      this.items[0] = item;

      this.store.dispatch(new UpdateLang(Langs[item]));
      this.store.dispatch(new GetLang());
    }
  }
}
