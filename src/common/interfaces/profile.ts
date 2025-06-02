export interface IProfileState {
  user: IProfile | undefined;
}

export interface IProfile {
  _id: string;
  name: string;
  email: string;
}

export interface IEditProfileForm {
  name: string;
  username: string;
  email: string;
}
