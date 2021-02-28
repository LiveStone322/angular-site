import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { GetLang, GetLangFailure, GetLangSuccess, LangActionsEnum, UpdateLang, UpdateLangFailure, UpdateLangSuccess } from "../actions/lang.actions";
import { selectLang } from "../selectors/lang.selector";
import { AppState } from "../state/app.state";


@Injectable()
export class LangEffects {

  constructor(private actions$: Actions, private store: Store<AppState>) { }

  public getLang = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetLang>(LangActionsEnum.GET_LANG),
      withLatestFrom(this.store.pipe(select(selectLang))),
      switchMap(([, selectedLang]) => of(new GetLangSuccess(selectedLang))),
      catchError(() => of(new GetLangFailure()))
    )
  })

  public updateLang = createEffect(() => {
    return this.actions$.pipe(
      ofType<UpdateLang>(LangActionsEnum.UPDATE_LANG),
      switchMap((action) => of(new UpdateLangSuccess(action.payload))),
      catchError(() => of(new UpdateLangFailure()))
    )
  })
}