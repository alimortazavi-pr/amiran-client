//Types
import { languagesType } from "@/common/types";
import { RootState } from "@/stores/index";

export function languageSelector(state: RootState): languagesType {
  return state.layouts.language;
}

export function isOpenMenuSelector(state: RootState): boolean {
  return state.layouts.isOpenMenu;
}

export function isOpenSearchSelector(state: RootState): boolean {
  return state.layouts.isOpenSearch;
}
