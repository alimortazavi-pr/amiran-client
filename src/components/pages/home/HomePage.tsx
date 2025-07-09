"use client";

import { FC } from "react";

//interfaces
import { IHome, IProject } from "@/common/interfaces";

//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { HeroSectionContainer } from "./HeroSection";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { ProjectsSectionContainer } from "./ProjectsSection";
import { ExperiencedSectionContainer } from "./ExperiencedSection";
import { ServicesSectionContainer } from "./ServicesSection";
import { VideoSectionContainer } from "./VideoSection";
import { FooterLogoContainer } from "@/components/common/FooterLogo";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  home: IHome;
  projects: IProject[];
}
export const HomePage: FC<IProps> = ({ home, projects }) => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="">
      <NavbarContainer />
      <HeroSectionContainer home={home} />
      <RailSpacerContainer />
      <ProjectsSectionContainer projects={projects} />
      <RailSpacerContainer />
      <ExperiencedSectionContainer />
      <RailSpacerContainer />
      <ServicesSectionContainer />
      <VideoSectionContainer />
      <FooterLogoContainer />
      <h6 className="my-10 lg:my-20 xl:my-32 text-primary text-center font-extralight md:text-xl lg:text-2xl xl:text-3xl">
        {t("HOME.ThankYou_Label")}
      </h6>
    </div>
  );
};
