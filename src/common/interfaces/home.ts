export interface IHomeState {
  heroImages: IHeroImage[];
}

export interface IHeroImage {
  _id: string;
  url: string;
  weight: string;
}
