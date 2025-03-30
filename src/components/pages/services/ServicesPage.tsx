//Components
import { NavbarContainer } from "./Navbar";
import { DescriptionSection, TitleSection, VideoSection } from ".";
import { ItemsContainer } from "./items";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";

export const ServicesPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <DescriptionSection />
        <VideoSection />
        <ItemsContainer />
        <RailSpacerContainer />
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
