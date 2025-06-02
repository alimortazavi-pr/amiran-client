import { AppThunk } from "@/stores";

//Actions of other store
import { setProfile } from "@/stores/profile/actions";

//Reducer
import { authReducer } from "@/stores/auth";

//Actions from reducer
export const { authenticate, setDidTryAutoLogin, logOut } = authReducer.actions;

//Interfaces
import { ILoginForm } from "@/common/interfaces";

//Tools
import { axiosInstance } from "@/common/axiosInstance";

//Utils
import { storage } from "@/common/utils";

//Actions from actions
export function autoLogin(token: string): AppThunk {
  return async (dispatch) => {
    try {
      await axiosInstance.get("/auth/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await dispatch(
        authenticate({
          token: token,
        })
      );
      // await dispatch(setProfile(res.data.user));
    } catch (err: any) {
      if (err.response?.status === 401) {
        dispatch(logOutAction());
      } else {
        console.log(err);
      }
    }
  };
}

export function loginAction(form: ILoginForm): AppThunk {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post("/auth/login", form);
      dispatch(
        authenticate({
          token: res.data.token,
        })
      );
      dispatch(setProfile(res.data.user));
      storage.setToken(res.data.token);
    } catch (err: any) {
      throw new Error(err.response.data.message);
    }
  };
}

export function logOutAction(): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(setProfile(undefined));
      storage.removeToken();
      dispatch(logOut());
    } catch (err: any) {
      throw new Error(err.response.data.message);
    }
  };
}
