//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { HeroSectionContainer } from "./HeroSection";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { ProjectsSectionContainer } from "./ProjectsSection";
import { TeamSectionContainer } from "./TeamSection";
import { ServicesSectionContainer } from "./ServicesSection";
import { VideoSectionContainer } from "./VideoSection";
import { FooterLogoContainer } from "@/components/common/FooterLogo";

export const HomePage = () => {
  return (
    <div>
      <NavbarContainer />
      <HeroSectionContainer />
      <RailSpacerContainer />
      <ProjectsSectionContainer />
      <RailSpacerContainer />
      <TeamSectionContainer />
      <RailSpacerContainer />
      <ServicesSectionContainer />
      <VideoSectionContainer />
      <FooterLogoContainer />
      <h6 className="my-10 text-primary text-center font-extralight tracking-[0.1rem]">Thanks for your beautiful look</h6>
    </div>
  );
};
