//Types
import { IProjectsState } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setForm(
    state: IProjectsState,
    action: PayloadAction<IProjectsState["form"]>
  ): IProjectsState {
    return {
      ...state,
      form: {
        ...state.form,
        ...action.payload,
      },
    };
  },
  setEditSection(
    state: IProjectsState,
    action: PayloadAction<IProjectsState["editSection"]>
  ): IProjectsState {
    return {
      ...state,
      editSection: action.payload,
    };
  },
};

export default reducers;
