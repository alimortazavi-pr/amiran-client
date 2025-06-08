"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Assets
import projectItemTestImage from "@/assets/svgs/projects/project-item-test.svg";

//Constants
import { SERVER_BASE_API_URL, PATHS } from "@/common/constants";

interface IProps {
  project: IProject;
}
export const ProjectItem: FC<IProps> = ({ project }) => {
  //Next
  const router = useRouter();

  //Functions
  const handleProjectClick = () => {
    router.push(PATHS.PROJECT(project.slug));
  };

  return (
    <div className="col-span-2 md:col-span-1 cursor-pointer">
      <div
        className="w-full h-48 lg:h-56 xl:h-80 2xl:h-96 relative cursor-pointer"
        onClick={handleProjectClick}
      >
        {project.thumbnail ? (
          <Image
            src={`${SERVER_BASE_API_URL}${project.thumbnail}`}
            alt={project.slug}
            fill
          />
        ) : (
          <Image src={projectItemTestImage} alt={project.slug} fill />
        )}
      </div>
    </div>
  );
};
