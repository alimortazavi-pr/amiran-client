import { AppThunk } from "@/stores";

//Actions of other reducers

//Reducer
import { layoutsReducer } from ".";

//Actions from reducer
export const { setLanguage, setIsOpenMenu, setIsOpenSearch } =
  layoutsReducer.actions;

//Interfaces

//Utils

//Actions
export function toggleIsOpenSearchAction(): AppThunk {
  return (dispatch, getState) => {
    dispatch(setIsOpenSearch(!getState().layouts.isOpenSearch));
  };
}
