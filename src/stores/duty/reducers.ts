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
  setTeamForm(
    state: IDutyState,
    action: PayloadAction<IDutyState["teamForm"]>
  ): IDutyState {
    return {
      ...state,
      teamForm: {
        ...state.teamForm,
        ...action.payload,
      },
    };
  },
  setIsEditingTeam(
    state: IDutyState,
    action: PayloadAction<IDutyState["isEditingTeam"]>
  ): IDutyState {
    return {
      ...state,
      isEditingTeam: action.payload,
    };
  },
};

export default reducers;
