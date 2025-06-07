"use client";

import { FC } from "react";
import { useMediaQuery } from "react-responsive";

//Interfaces
import { IProject } from "@/common/interfaces";

//Components
import { ProjectItem } from ".";

interface IProps {
  projects: IProject[];
}
export const ProjectsContainer: FC<IProps> = ({ projects }) => {
  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="grid grid-cols-4 gap-5 lg:gap-20 xl:gap-28 2xl:gap-24 px-10 2xl:px-0">
      {projects?.slice(0, isMd ? 4 : 2).map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </div>
  );
};
