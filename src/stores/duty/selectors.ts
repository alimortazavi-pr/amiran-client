//Types
import { IDutyState } from "@/common/interfaces";
import { RootState } from "@/stores/index";

export function employersImagesSelector(
  state: RootState
): IDutyState["employersImages"] {
  return state.duty.employersImages;
}

export function teamFormSelector(state: RootState): IDutyState["teamForm"] {
  return state.duty.teamForm;
}

export function isEditingTeamSelector(
  state: RootState
): IDutyState["isEditingTeam"] {
  return state.duty.isEditingTeam;
}
