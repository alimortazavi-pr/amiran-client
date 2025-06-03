"use client";

import { FC } from "react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Components
import { SingleItem } from ".";

interface IProps {
  projects: IProject[];
}
export const ItemsContainer: FC<IProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-12 gap-y-10 md:gap-y-16 lg:gap-y-20 xl:gap-y-24 gap-x-5">
      {projects?.map((project) => (
        <SingleItem key={project._id} project={project} />
      ))}
    </div>
  );
};
