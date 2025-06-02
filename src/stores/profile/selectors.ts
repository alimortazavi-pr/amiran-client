import { RootState } from "@/stores/index";

//Interfaces
import { IProfile } from "@/common/interfaces";

export function userSelector(state: RootState): IProfile | undefined {
  return state.profile.user;
}
