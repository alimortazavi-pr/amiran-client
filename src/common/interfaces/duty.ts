export interface IDutyState {
  employersImages: undefined | IEmployerImage[];
  teamForm: ITeamForm;
  isEditingTeam: boolean;
}

export interface IEmployerImage {
  _id: string;
  url: string;
  weight: string;
}

export interface ITeam {
  _id: string;
  firstName: { fa: string; en: string };
  lastName: { fa: string; en: string };
  description: { fa: string; en: string };
  image: string;
  deleted: boolean;
}

export interface ITeamForm {
  firstName: { fa: string; en: string };
  lastName: { fa: string; en: string };
  description: { fa: string; en: string };
  image: File | string;
}
