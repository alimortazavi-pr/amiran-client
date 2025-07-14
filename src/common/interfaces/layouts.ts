import { UseDisclosureProps } from "@heroui/react";
import { languagesType } from "../types";

export interface INextUIModalProps extends UseDisclosureProps {
  onOpenChange: () => void;
}

export interface ILayoutsState {
  language: languagesType;
  isOpenMenu: boolean;
  isOpenSearch: boolean;
  videos: {
    home: string;
    duty: string;
    services: string;
  };
  contactUsForm: IContactUsForm;
  contactUsEditSection: {
    label: string;
    value: keyof IContactUsForm | undefined;
  };
}

export interface IContactUs {
  title: { fa: string; en: string };
  description: { fa: string; en: string };
  instagram: { fa: string; en: string };
  address: { fa: string; en: string };
  phones: { fa: string; en: string };
}

export interface IContactUsForm {
  title: { fa: string; en: string };
  description: { fa: string; en: string };
  instagram: { fa: string; en: string };
  address: { fa: string; en: string };
  phones: { fa: string; en: string };
}
