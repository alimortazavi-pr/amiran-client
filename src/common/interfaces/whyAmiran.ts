export interface IWhyAmiranState {
  updatesImages: undefined | IUpdateImage[];
  reportsImages: undefined | IReportImage[];
  brands: undefined | IBrandImage[];
}

export interface IUpdateImage {
  _id: string;
  url: string;
  weight: string;
}

export interface IReportImage {
  _id: string;
  url: string;
  weight: string;
}

export interface IBrandForm {
  image: File | string;
  website: string;
}

export interface IBrandImage {
  _id: string;
  image: string;
  website: string;
}
