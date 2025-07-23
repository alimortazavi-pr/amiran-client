//Types
import { IWhyAmiranState } from "@/common/interfaces";
import { RootState } from "@/stores/index";

export function updatesImagesSelector(
  state: RootState
): IWhyAmiranState["updatesImages"] {
  return state.whyAmiran.updatesImages;
}

export function reportsImagesSelector(
  state: RootState
): IWhyAmiranState["reportsImages"] {
  return state.whyAmiran.reportsImages;
}

export function brandsSelector(state: RootState): IWhyAmiranState["brands"] {
  return state.whyAmiran.brands;
}
