//Types
import { IArticlesState } from "@/common/interfaces";
import { RootState } from "@/stores/index";

export function formSelector(state: RootState): IArticlesState["form"] {
  return state.articles.form;
}

export function editSectionSelector(
  state: RootState
): IArticlesState["editSection"] {
  return state.articles.editSection;
}
