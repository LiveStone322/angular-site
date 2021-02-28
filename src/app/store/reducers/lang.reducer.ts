import { initialLangState, LangState } from "../state/lang.state";
import { LangActions, LangActionsEnum } from '../actions/lang.actions'

export const langReducers = (
  state = initialLangState,
  action: LangActions
): LangState => {
  switch (action.type) {
    case LangActionsEnum.UPDATE_LANG_SUCCESS: {
      return {
        selectedLang: action.payload
      }
    }
    case LangActionsEnum.GET_LANG_SUCCESS: {
      return {
        selectedLang: action.payload
      }
    }
    default: return state;
  }
}