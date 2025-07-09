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
  setIsOpenMenu(
    state: ILayoutsState,
    action: PayloadAction<boolean>
  ): ILayoutsState {
    return {
      ...state,
      isOpenMenu: action.payload,
    };
  },
  setIsOpenSearch(
    state: ILayoutsState,
    action: PayloadAction<boolean>
  ): ILayoutsState {
    return {
      ...state,
      isOpenSearch: action.payload,
    };
  },
  setVideos(
    state: ILayoutsState,
    action: PayloadAction<ILayoutsState["videos"]>
  ): ILayoutsState {
    return {
      ...state,
      videos: action.payload,
    };
  },
  setContactUsForm(
    state: ILayoutsState,
    action: PayloadAction<ILayoutsState["contactUsForm"]>
  ): ILayoutsState {
    return {
      ...state,
      contactUsForm: {
        ...state.contactUsForm,
        ...action.payload,
      },
    };
  },
  setContactUsEditSection(
    state: ILayoutsState,
    action: PayloadAction<ILayoutsState["contactUsEditSection"]>
  ): ILayoutsState {
    return {
      ...state,
      contactUsEditSection: action.payload,
    };
  },
};

export default reducers;
