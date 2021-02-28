import { Langs } from '../../shared/models/langs.model';

export interface LangState {
  selectedLang: Langs
}

export const initialLangState: LangState = {
  selectedLang: Langs.RU
}