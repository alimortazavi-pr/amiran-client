//Types
import { IArticlesState } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setForm(
    state: IArticlesState,
    action: PayloadAction<IArticlesState["form"]>
  ): IArticlesState {
    return {
      ...state,
      form: {
        ...state.form,
        ...action.payload,
      },
    };
  },
  setEditSection(
    state: IArticlesState,
    action: PayloadAction<IArticlesState["editSection"]>
  ): IArticlesState {
    return {
      ...state,
      editSection: action.payload,
    };
  },
};

export default reducers;
