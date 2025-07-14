export interface IWhyAmiranState {
  updatesImages: undefined | IUpdateImage[];
  reportsImages: undefined | IReportImage[];
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
