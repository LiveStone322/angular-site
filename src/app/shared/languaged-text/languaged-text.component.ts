import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Optional,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetLang } from 'src/app/store/actions/lang.actions';
import { selectLang } from 'src/app/store/selectors/lang.selector';
import { AppState } from 'src/app/store/state/app.state';
import { Langs } from '../models/langs.model';
import { LanguagedText } from '../models/languaged-text.model';

@Component({
  selector: 'app-languaged-text',
  templateUrl: './languaged-text.component.html',
  styleUrls: ['./languaged-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagedTextComponent implements OnInit {
  public langsEnum = Langs;
  public lang$ = this.store.pipe(select(selectLang));

  @Input() languagedTexts!: LanguagedText;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetLang());
  }
}
