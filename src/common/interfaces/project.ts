export interface IProjectsState {
  form: IProjectForm;
  editSection: {
    label: string;
    value: keyof IProjectForm | undefined;
  };
}

export interface IProject {
  _id: string;
  thumbnail: string;
  logo: string;
  video: string;
  slug: string;
  description: { fa: string; en: string };
  architect: { fa: string; en: string };
  architectWebsite: string;
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
  order: number;
  images: IProjectImage[];
  plans: IPlanImage[];
  has4Images: boolean;
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

export interface IProjectForm {
  slug: string;
  description: { fa: string; en: string };
  architect: { fa: string; en: string };
  architectWebsite: string;
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
  deleted: boolean;
}
