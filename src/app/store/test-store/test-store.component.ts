import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Langs } from 'src/app/shared/models/langs.model';
import { selectLang } from '../selectors/lang.selector';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-test-store',
  template: ``,
  styles: [],
})
export class TestStoreComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  langs: Langs;

  constructor(public store: Store<any>) {}

  ngOnInit() {
    this.store
      .select(selectLang)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((langs) => {
        this.langs = langs;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
