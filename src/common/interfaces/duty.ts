export interface IDutyState {
  employersImages: undefined | IEmployerImage[];
}

export interface IEmployerImage {
  _id: string;
  url: string;
  weight: string;
}
