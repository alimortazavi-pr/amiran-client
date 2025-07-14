import { FC } from "react";

//Interfaces
import { ITeam, IDuty } from "@/common/interfaces";

//Components
import { NavbarContainer } from "@/components/common/Navbar";
import {
  AmiranLogoSection,
  Description3Section,
  DescriptionSection,
  TitleSection,
  VideoSectionContainer,
} from ".";
import { TeamContainer } from "./TeamSection";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { ExperiencedSectionContainer } from "./ExperiencedSection";
import { WorkProcessDescription, WorkProcessImage } from "./WorkProcess";

interface IProps {
  teams: ITeam[];
  duty: IDuty;
}
export const DutyPage: FC<IProps> = ({ teams, duty }) => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <div className="hidden md:block">
          <AmiranLogoSection />
        </div>
        <DescriptionSection />
        <RailSpacerContainer />
        <div className="md:hidden">
          <AmiranLogoSection />
        </div>
        <WorkProcessImage duty={duty} />
        <WorkProcessDescription duty={duty} />
        <RailSpacerContainer />
        <ExperiencedSectionContainer />
        <Description3Section />
        <TeamContainer teams={teams} />
        <VideoSectionContainer />
        <RailSpacerContainer />
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
