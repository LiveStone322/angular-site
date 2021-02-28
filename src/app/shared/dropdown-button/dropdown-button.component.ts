import { Component, OnInit, ChangeDetectionStrategy, forwardRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownButtonComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownButtonComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  public items: string[] = Object.keys(Langs).filter((val) => isNaN(Number(val)))
  public active = false;

  constructor(private store: Store, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    setTimeout(() => this.updateStore(this.items[0]));
  }

  onExpandClick(): void {
    this.active = !this.active;
  }

  onItemClick(idx: number): void {
    if (this.active) {
      const item = this.items[idx];

      this.chooseItem(item, idx);

      this.updateStore(item);
    }
  }

  chooseItem(item: string, idx: number = -1): void {
    if (idx < 0) {
      idx = this.items.findIndex((curItem) => {
        if (curItem === item) return true
      })
      if (idx < 0) return;
    }
    this.items[idx] = this.items[0];
    this.items[0] = item;
  }

  updateStore(item: string) {
    this.store.dispatch(new UpdateLang(Langs[item]));
    this.store.dispatch(new GetLang());
  }

  onChange: any = () => { }
  onTouch: any = () => { }

  writeValue(value: string) {
    this.chooseItem(value);
    this.active = false;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
