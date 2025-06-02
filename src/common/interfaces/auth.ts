export interface IAuthState {
  token: null | string;
  didTryAutoLogin: boolean;
  isAuth: boolean;
}

export interface ILoginForm {
  username: string;
  password: string;
}

export interface ISaveToLocal {
  token: string;
}
