//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { HeroSectionContainer } from "./HeroSection";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { ProjectsSectionContainer } from "./ProjectsSection";

export const HomePage = () => {
  return (
    <div>
      <NavbarContainer />
      <HeroSectionContainer />
      <RailSpacerContainer />
      <ProjectsSectionContainer />
    </div>
  );
};
