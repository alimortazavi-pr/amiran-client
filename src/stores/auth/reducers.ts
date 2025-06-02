import { PayloadAction } from "@reduxjs/toolkit";

//Interfaces
import { IAuthState } from "@/common/interfaces";

//Tools

const reducers = {
  authenticate: (
    state: IAuthState,
    action: PayloadAction<{ token: string }>
  ) => {
    return {
      ...state,
      token: action.payload.token,
      didTryAutoLogin: true,
      isAuth: true,
    };
  },
  setDidTryAutoLogin: (state: IAuthState) => {
    return {
      ...state,
      didTryAutoLogin: true,
    };
  },
  logOut: (): IAuthState => {
    return {
      token: null,
      didTryAutoLogin: true,
      isAuth: false,
    };
  },
};

export default reducers;
