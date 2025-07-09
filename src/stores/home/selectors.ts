//Types
import { IHomeState } from "@/common/interfaces";
import { RootState } from "@/stores/index";

export function heroImagesSelector(state: RootState): IHomeState["heroImages"] {
  return state.home.heroImages;
}

export function heroFormSelector(state: RootState): IHomeState["heroForm"] {
  return state.home.heroForm;
}

export function heroEditSectionSelector(
  state: RootState
): IHomeState["heroEditSection"] {
  return state.home.heroEditSection;
}
