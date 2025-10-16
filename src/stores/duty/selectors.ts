//Types
import { IDutyState } from "@/common/interfaces";
import { RootState } from "@/stores/index";

export function employersImagesSelector(
  state: RootState
): IDutyState["employersImages"] {
  return state.duty.employersImages;
}

export function selectedTeamSelector(
  state: RootState
): IDutyState["selectedTeam"] {
  return state.duty.selectedTeam;
}

export function isDeletingTeamSelector(
  state: RootState
): IDutyState["isDeletingTeam"] {
  return state.duty.isDeletingTeam;
}
