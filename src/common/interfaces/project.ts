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
  images: ProjectImage[];
  plans: PlanImage[];
  deleted: boolean;
}

export interface ProjectImage {
  _id: string;
  project: string;
  url: string;
  weight: string;
}

export interface PlanImage {
  _id: string;
  project: string;
  url: string;
  weight: string;
}
