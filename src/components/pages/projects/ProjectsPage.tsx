//Components
import { NavbarContainer } from "./Navbar";
import { TitleSection, VideoSection } from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { ItemsContainer } from "./items";

export const ProjectsPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <ItemsContainer />
        <VideoSection />
        <div className="lg:hidden">
          <RailSpacerContainer />
        </div>
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
