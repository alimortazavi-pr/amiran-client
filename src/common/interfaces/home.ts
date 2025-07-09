export interface IHomeState {
  heroImages: undefined | IHeroImage[];
  heroForm: IHeroForm;
  heroEditSection: {
    label: string;
    value: keyof IHeroForm | undefined;
  };
}

export interface IHeroImage {
  _id: string;
  url: string;
  weight: string;
}

export interface IHome {
  heroTitle: { fa: string; en: string };
  heroDescription: { fa: string; en: string };
}

export interface IHeroForm {
  heroTitle: { fa: string; en: string };
  heroDescription: { fa: string; en: string };
}
