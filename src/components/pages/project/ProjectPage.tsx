"use client";

import { FC, useEffect } from "react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { setForm } from "@/stores/projects/actions";

//Components
import { NavbarContainer } from "./Navbar";
import { DescriptionSection, DirectionsBtn, ImagesSection } from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { PlanImagesContainer } from "./PlanImages";
import { FeaturesContainer } from "./Features";
import { VideoSectionContainer } from "../home/VideoSection";
import { EditProjectModal } from "./EditProject";
import { SettingBtn } from "./Setting";

//Constants
import { PATHS } from "@/common/constants";

interface IProps {
  project: IProject;
}
export const ProjectPage: FC<IProps> = ({ project }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Life cycle
  useEffect(() => {
    if (project._id) {
      dispatch(
        setForm({
          slug: project.slug,
          description: project.description,
          isPublished: project.isPublished,
          usage: project.usage,
          location: project.location,
          landArea: project.landArea,
          totalBuiltArea: project.totalBuiltArea,
          numberOfFloors: project.numberOfFloors,
          numberOfUnits: project.numberOfUnits,
          unitArea: project.unitArea,
          numberOfUnitsPerFloor: project.numberOfUnitsPerFloor,
          directions: project.directions,
          deleted: project.deleted,
        })
      );
    }
  }, [project]);

  return (
    <div className="px-3">
      <NavbarContainer project={project} />
      <div className="overflow-hidden">
        <div className="md:flex items-start">
          <ImagesSection project={project} />
          <DescriptionSection project={project} />
        </div>
        <VideoSectionContainer />
        <PlanImagesContainer project={project} />
        <FeaturesContainer project={project} />
        <DirectionsBtn project={project} />
        <div className="md:hidden">
          <RailSpacerContainer />
        </div>
        <div className="md:mt-32">
          <BackToPreviousPageBtn
            content="BACK TO PROJECTS"
            previousPath={PATHS.PROJECTS}
          />
        </div>
      </div>
      <EditProjectModal />
      <SettingBtn />
    </div>
  );
};
