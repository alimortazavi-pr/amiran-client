//Types
import { IProjectsState } from "@/common/interfaces";
import { RootState } from "@/stores/index";

export function formSelector(state: RootState): IProjectsState["form"] {
  return state.projects.form;
}

export function editSectionSelector(
  state: RootState
): IProjectsState["editSection"] {
  return state.projects.editSection;
}
