import { initialLangState, LangState } from './lang.state';

export interface AppState {
  lang: LangState;
}

export const initialAppState: AppState = {
  lang: initialLangState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
