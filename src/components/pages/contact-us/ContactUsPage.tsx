import { FC } from "react";

//Interfaces
import { IContactUs } from "@/common/interfaces";

//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { DescriptionSection, ImageSection, TitleSection } from ".";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { EditContactUsModal } from "./EditContactUs";

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
        <ImageSection />
        <BackToPreviousPageBtn />
      </div>
      <EditContactUsModal />
    </div>
  );
};
