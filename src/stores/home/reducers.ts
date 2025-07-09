//Types
import { IHomeState } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setHeroImages(
    state: IHomeState,
    action: PayloadAction<IHomeState["heroImages"]>
  ): IHomeState {
    return {
      ...state,
      heroImages: action.payload,
    };
  },
  setHeroForm(
    state: IHomeState,
    action: PayloadAction<IHomeState["heroForm"]>
  ): IHomeState {
    return {
      ...state,
      heroForm: {
        ...state.heroForm,
        ...action.payload,
      },
    };
  },
  setHeroEditSection(
    state: IHomeState,
    action: PayloadAction<IHomeState["heroEditSection"]>
  ): IHomeState {
    return {
      ...state,
      heroEditSection: action.payload,
    };
  },
};

export default reducers;
