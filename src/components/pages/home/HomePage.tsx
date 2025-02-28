//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { HeroSectionContainer } from "./HeroSection";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { ProjectsSectionContainer } from "./ProjectsSection";
import { TeamSectionContainer } from "./Team";

export const HomePage = () => {
  return (
    <div>
      <NavbarContainer />
      <HeroSectionContainer />
      <RailSpacerContainer />
      <ProjectsSectionContainer />
      <RailSpacerContainer />
      <TeamSectionContainer />
    </div>
  );
};
