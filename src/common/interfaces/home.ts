export interface IHomeState {
  heroImages: undefined | IHeroImage[];
}

export interface IHeroImage {
  _id: string;
  url: string;
  weight: string;
}
