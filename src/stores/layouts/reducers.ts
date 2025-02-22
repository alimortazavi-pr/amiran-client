//Types
import { ILayoutsState } from "@/common/interfaces";
import { languagesType } from "@/common/types";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setLanguage(
    state: ILayoutsState,
    action: PayloadAction<languagesType>
  ): ILayoutsState {
    return {
      ...state,
      language: action.payload,
    };
  },
};

export default reducers;
