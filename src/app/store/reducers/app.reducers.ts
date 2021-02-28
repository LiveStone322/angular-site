import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { langReducers } from './lang.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  lang: langReducers
}