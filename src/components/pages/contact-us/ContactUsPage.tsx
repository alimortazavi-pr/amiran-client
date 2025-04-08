//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { DescriptionSection, ImageSection, TitleSection } from ".";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";

export const ContactUsPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <DescriptionSection />
        <ImageSection />
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
