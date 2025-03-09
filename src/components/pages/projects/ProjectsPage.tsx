//Components
import { NavbarContainer } from "./Navbar";
import { TitleSection, VideoSection } from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToHomeBtn } from "@/components/common/BackToHome";
import { ItemsContainer } from "./items";

export const ProjectsPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <ItemsContainer />
        <VideoSection />
        <RailSpacerContainer count={3} />
        <BackToHomeBtn />
      </div>
    </div>
  );
};
