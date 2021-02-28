import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { LangState } from "../state/lang.state";

const selectLangState = (state: AppState) => state.lang;

export const selectLang = createSelector(selectLangState, (state: LangState) => state.selectedLang);