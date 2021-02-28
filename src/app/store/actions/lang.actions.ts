import { Action } from "@ngrx/store";
import { Langs } from "../../shared/models/langs.model";

export enum LangActionsEnum {
  GET_LANG = '[GET LANG]',
  GET_LANG_SUCCESS = '[GET LANG] success',
  GET_LANG_FAILURE = '[GET LANG] failure',
  UPDATE_LANG = '[UPDATE LANG]',
  UPDATE_LANG_SUCCESS = '[UPDATE LANG] success',
  UPDATE_LANG_FAILURE = '[UPDATE LANG] failure',
}

export class GetLang implements Action {
  public readonly type = LangActionsEnum.GET_LANG;
}
export class GetLangSuccess implements Action {
  public readonly type = LangActionsEnum.GET_LANG_SUCCESS;
  constructor(public payload: Langs) { }
}
export class GetLangFailure implements Action {
  public readonly type = LangActionsEnum.GET_LANG_FAILURE;
}

export class UpdateLang implements Action {
  public readonly type = LangActionsEnum.UPDATE_LANG;
  constructor(public payload: Langs) { }
}
export class UpdateLangSuccess implements Action {
  public readonly type = LangActionsEnum.UPDATE_LANG_SUCCESS;
  constructor(public payload: Langs) { }
}
export class UpdateLangFailure implements Action {
  public readonly type = LangActionsEnum.UPDATE_LANG_FAILURE;
}

export type LangActions =
  | UpdateLang
  | UpdateLangSuccess
  | UpdateLangFailure
  | GetLang
  | GetLangSuccess
  | GetLangFailure;
