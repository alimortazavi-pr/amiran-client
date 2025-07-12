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
  setSelectedTeam(
    state: IDutyState,
    action: PayloadAction<IDutyState["selectedTeam"]>
  ): IDutyState {
    return {
      ...state,
      selectedTeam: action.payload,
    };
  },
};

export default reducers;
