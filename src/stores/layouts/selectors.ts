//Types
import { ILayoutsState } from "@/common/interfaces";
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

export function videosSelector(state: RootState): ILayoutsState["videos"] {
  return state.layouts.videos;
}

export function contactUsFormSelector(
  state: RootState
): ILayoutsState["contactUsForm"] {
  return state.layouts.contactUsForm;
}

export function contactUsEditSectionSelector(
  state: RootState
): ILayoutsState["contactUsEditSection"] {
  return state.layouts.contactUsEditSection;
}
