import { AppThunk } from "@/stores";

//Actions of other store

//Reducer
import { profileReducer } from "@/stores/profile";

//Actions from reducer
export const { setProfile } = profileReducer.actions;

//Interfaces
import { IEditProfileForm } from "@/common/interfaces";

//Tools
import { axiosInstance } from "@/common/axiosInstance";

//Utils
import { storage } from "@/common/utils";

//Actions from actions
export function getProfile(): AppThunk {
  return async (dispatch, getState) => {
    try {
      if (getState().auth.isAuth) {
        const res = await axiosInstance.get(`/users/profile`, {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        });
        await dispatch(setProfile(res.data.user));
      }
    } catch (err: any) {
      console.log(err);

      throw new Error(err.response.data.message);
    }
  };
}

export function editProfile(form: IEditProfileForm): AppThunk {
  return async (dispatch, getState) => {
    try {
      if (getState().auth.isAuth) {
        const res = await axiosInstance.put(`/users/profile`, form, {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        });
        await dispatch(setProfile(res.data.user));

        storage.setToken(getState().auth.token as string);
      }
    } catch (err: any) {
      throw new Error(err.response.data.message);
    }
  };
}
