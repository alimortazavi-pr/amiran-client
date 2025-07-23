//Types
import { IWhyAmiranState } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setUpdatesImages(
    state: IWhyAmiranState,
    action: PayloadAction<IWhyAmiranState["updatesImages"]>
  ): IWhyAmiranState {
    return {
      ...state,
      updatesImages: action.payload,
    };
  },
  setReportsImages(
    state: IWhyAmiranState,
    action: PayloadAction<IWhyAmiranState["reportsImages"]>
  ): IWhyAmiranState {
    return {
      ...state,
      reportsImages: action.payload,
    };
  },
  setBrands(
    state: IWhyAmiranState,
    action: PayloadAction<IWhyAmiranState["brands"]>
  ): IWhyAmiranState {
    return {
      ...state,
      brands: action.payload,
    };
  },
};

export default reducers;
