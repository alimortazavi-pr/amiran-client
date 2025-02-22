//Types
import { languagesType } from "@/common/types";
import { RootState } from "@/stores/index";

export function languageSelector(state: RootState): languagesType {
  return state.layouts.language;
}
