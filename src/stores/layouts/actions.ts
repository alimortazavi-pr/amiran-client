import { AppThunk } from "@/stores";

//Actions of other reducers

//Reducer
import { layoutsReducer } from ".";

//Actions from reducer
export const { setLanguage, setIsOpenMenu, setIsOpenSearch } =
  layoutsReducer.actions;

//Interfaces

//Types
import { languagesType } from "@/common/types";

//Utils
import { storage } from "@/common/utils";

//Actions
export function toggleIsOpenSearchAction(): AppThunk {
  return (dispatch, getState) => {
    dispatch(setIsOpenSearch(!getState().layouts.isOpenSearch));
  };
}

export function setLanguageAction(language: languagesType): AppThunk {
  return async (dispatch) => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.dir = language !== "en" ? "rtl" : "ltr";
      htmlElement.lang = language;
    }
    dispatch(setLanguage(language));
    storage.setLanguage(language);
  };
}
