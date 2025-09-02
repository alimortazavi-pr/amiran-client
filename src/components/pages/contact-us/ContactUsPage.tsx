'use client'

import { FC } from "react";

//Interfaces
import { IContactUs } from "@/common/interfaces";

//Components
import { NavbarContainer } from "@/components/common/Navbar";
import {
  DescriptionSection,
  InformationSection,
  TitleSection,
  EditDescriptionContactUsModal,
} from ".";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { Footer } from "@/components/common/Footer";

interface IProps {
  contactUs: IContactUs;
}
export const ContactUsPage: FC<IProps> = ({ contactUs }) => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <DescriptionSection contactUs={contactUs} />
        <InformationSection contactUs={contactUs} />
        <BackToPreviousPageBtn />
      </div>
      <EditDescriptionContactUsModal />
      <Footer />
    </div>
  );
};
