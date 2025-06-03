export interface IProjectsState {
  totalItems?: number;
}

export interface IProject {
  _id: string;
  thumbnail: string;
  logo: string;
  slug: string;
  description: string;
  isPublished: boolean;
  usage: string;
  location: string;
  landArea: string;
  totalBuiltArea: string;
  numberOfFloors: string;
  numberOfUnits: string;
  unitArea: string;
  numberOfUnitsPerFloor: string;
  directions: string;
  images: IProjectImage[];
  plans: IPlanImage[];
  deleted: boolean;
}

export interface IProjectImage {
  _id: string;
  project: string;
  url: string;
  weight: string;
}

export interface IPlanImage {
  _id: string;
  project: string;
  url: string;
}
