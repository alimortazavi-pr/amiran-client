import { FC } from "react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Components
import { CreatePlanImage, PlanImage } from ".";

interface IProps {
  project: IProject;
}
export const PlanImagesContainer: FC<IProps> = ({ project }) => {
  return (
    <div className="grid grid-cols-12 gap-y-16 md:gap-x-5 px-5 mb-16 md:mb-20 lg:mb-24 xl:mb-32">
      {project.plans.map((plan, index) => (
        <PlanImage key={index} plan={plan} />
      ))}
      <CreatePlanImage />
    </div>
  );
};
