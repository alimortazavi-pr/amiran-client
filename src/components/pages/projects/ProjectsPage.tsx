//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { TitleSection } from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { ItemsContainer } from "./items";
import { VideoSectionContainer } from "../home/VideoSection";

export const ProjectsPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <ItemsContainer />
        <VideoSectionContainer />
        <div className="lg:hidden">
          <RailSpacerContainer />
        </div>
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
