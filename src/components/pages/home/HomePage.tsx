import { FC } from "react";

//interfaces
import { IProject } from "@/common/interfaces";

//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { HeroSectionContainer } from "./HeroSection";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { ProjectsSectionContainer } from "./ProjectsSection";
import { ExperiencedSectionContainer } from "./ExperiencedSection";
import { ServicesSectionContainer } from "./ServicesSection";
import { VideoSectionContainer } from "./VideoSection";
import { FooterLogoContainer } from "@/components/common/FooterLogo";

interface IProps {
  projects: IProject[];
}
export const HomePage: FC<IProps> = ({ projects }) => {
  return (
    <div className="">
      <NavbarContainer />
      <HeroSectionContainer />
      <RailSpacerContainer />
      <ProjectsSectionContainer projects={projects} />
      <RailSpacerContainer />
      <ExperiencedSectionContainer />
      <RailSpacerContainer />
      <ServicesSectionContainer />
      <VideoSectionContainer />
      <FooterLogoContainer />
      <h6 className="my-10 lg:my-20 xl:my-32 text-primary text-center font-extralight tracking-[0.1rem] md:text-xl md:tracking-[0.5rem] lg:text-2xl lg:tracking-[0.5rem] xl:text-3xl">
        Thanks for your beautiful look
      </h6>
    </div>
  );
};
