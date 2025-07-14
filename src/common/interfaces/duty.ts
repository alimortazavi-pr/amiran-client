export interface IDutyState {
  employersImages: undefined | IEmployerImage[];
  selectedTeam: ITeam | undefined;
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

export interface IDuty {
  _id: string;
  workProcessTitle: { fa: string; en: string };
  workProcessDescription: { fa: string; en: string };
  workProcessImage: string;
  deleted: boolean;
}

export interface IWorkProcessForm {
  workProcessTitle: { fa: string; en: string };
  workProcessDescription: { fa: string; en: string };
  workProcessImage: File | string;
}
