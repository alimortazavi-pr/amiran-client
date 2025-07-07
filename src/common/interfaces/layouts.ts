import { languagesType } from "../types";

export interface ILayoutsState {
  language: languagesType;
  isOpenMenu: boolean;
  isOpenSearch: boolean;
  videos: {
    home: string;
    duty: string;
    services: string;
  };
}
