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
        title="PROJECT.FEATURES.Usage_Label"
        content={project.usage.toUpperCase()}
        value="usage"
      />
      <FeatureItem
        title="PROJECT.FEATURES.Location_Label"
        content={project.location.toUpperCase()}
        value="location"
      />
      <FeatureItem
        title="PROJECT.FEATURES.LandArea_Label"
        content={project.landArea.toUpperCase()}
        value="landArea"
      />
      <FeatureItem
        title="PROJECT.FEATURES.TotalBuiltArea_Label"
        content={project.totalBuiltArea.toUpperCase()}
        value="totalBuiltArea"
      />
      <FeatureItem
        title="PROJECT.FEATURES.NumberOfFloors_Label"
        content={project.numberOfFloors.toUpperCase()}
        value="numberOfFloors"
      />
      <FeatureItem
        title="PROJECT.FEATURES.NumberOfUnits_Label"
        content={project.numberOfUnits.toUpperCase()}
        value="numberOfUnits"
      />
      <FeatureItem
        title="PROJECT.FEATURES.UnitArea_Label"
        content={project.unitArea.toUpperCase()}
        value="unitArea"
      />
      <FeatureItem
        title="PROJECT.FEATURES.NumberOfUnitsPerFloor_Label"
        content={project.numberOfUnitsPerFloor.toUpperCase()}
        value="numberOfUnitsPerFloor"
      />
    </div>
  );
};
