import { RouterReducerState } from "@ngrx/router-store";
import { initialLangState, LangState } from "./lang.state";

export interface AppState {
  router?: RouterReducerState;
  lang: LangState;
}

export const initialAppState: AppState = {
  lang: initialLangState
}

export function getInitialState(): AppState {
  return initialAppState;
}
