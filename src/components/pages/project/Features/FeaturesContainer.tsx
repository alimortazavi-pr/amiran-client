import { FC } from "react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Components
import { FeatureItem } from ".";

interface IProps {
  project: IProject;
}
export const FeaturesContainer: FC<IProps> = ({ project }) => {
  return (
    <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 md:px-5 lg:gap-x-14 xl:gap-x-16 mb-24">
      <FeatureItem
        title="USAGE"
        content={project.usage.toUpperCase()}
        value="usage"
      />
      <FeatureItem
        title="LOCATION"
        content={project.location.toUpperCase()}
        value="location"
      />
      <FeatureItem
        title="LAND AREA"
        content={project.landArea.toUpperCase()}
        value="landArea"
      />
      <FeatureItem
        title="TOTAL BUILT AREA"
        content={project.totalBuiltArea.toUpperCase()}
        value="totalBuiltArea"
      />
      <FeatureItem
        title="NUMBER OF FLOORS"
        content={project.numberOfFloors.toUpperCase()}
        value="numberOfFloors"
      />
      <FeatureItem
        title="NUMBER OF UNITS"
        content={project.numberOfUnits.toUpperCase()}
        value="numberOfUnits"
      />
      <FeatureItem
        title="UNIT AREA"
        content={project.unitArea.toUpperCase()}
        value="unitArea"
      />
      <FeatureItem
        title="NUMBER OF UNITS PER FLOOR"
        content={project.numberOfUnitsPerFloor.toUpperCase()}
        value="numberOfUnitsPerFloor"
      />
    </div>
  );
};
