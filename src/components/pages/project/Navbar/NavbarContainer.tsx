"use client";

import { FC } from "react";
import { useMediaQuery } from "react-responsive";

//Interfaces
import { IProject } from "@/common/interfaces";

//Components
import { RailSpacer } from "@/components/common/RailSpacer";
import { LogoSection } from ".";

interface IProps {
  project: IProject;
}
export const NavbarContainer: FC<IProps> = ({ project }) => {
  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isXl = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <div className="flex items-center justify-center pt-10 pb-16 md:mb-10">
      {Array.from({ length: isLg ? 4 : 2 }).map((_, index) => (
        <div className="rotate-90" key={index}>
          <RailSpacer size={isXl ? 80 : isMd ? 65 : 29} />
        </div>
      ))}
      <LogoSection project={project} />
      {Array.from({ length: isLg ? 4 : 2 }).map((_, index) => (
        <div className="rotate-90" key={index}>
          <RailSpacer size={isXl ? 80 : isMd ? 65 : 29} />
        </div>
      ))}
    </div>
  );
};
