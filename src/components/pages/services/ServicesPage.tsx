//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { DescriptionSection, TitleSection } from ".";
import { ItemsContainer } from "./items";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { VideoSectionContainer } from "../home/VideoSection";

export const ServicesPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <DescriptionSection />
        <VideoSectionContainer />
        <ItemsContainer />
        <RailSpacerContainer />
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
