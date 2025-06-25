//Types
import { IDutyState } from "@/common/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//Tools

const reducers = {
  setEmployersImages(
    state: IDutyState,
    action: PayloadAction<IDutyState["employersImages"]>
  ): IDutyState {
    return {
      ...state,
      employersImages: action.payload,
    };
  },
};

export default reducers;
