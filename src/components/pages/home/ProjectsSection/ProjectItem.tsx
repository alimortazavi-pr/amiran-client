"use client";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

//Interfaces
import { IProject } from "@/common/interfaces";

//Assets
import projectItemTestImage from "@/assets/svgs/projects/project-item-test.svg";

//Constants
import { BASE_API_URL, PATHS } from "@/common/constants";

interface IProps {
  project: IProject;
}
export const ProjectItem: FC<IProps> = ({ project }) => {
  return (
    <div className="col-span-2 md:col-span-1 cursor-pointer">
      <Link href={PATHS.PROJECT(project.slug)} className="w-full h-full">
        <div className="w-full h-48 lg:h-56 xl:h-80 2xl:h-96 relative cursor-pointer">
          {project.thumbnail ? (
            <Image
              src={`${BASE_API_URL}${project.thumbnail}`}
              alt={project.slug}
              fill
              className="object-contain"
            />
          ) : (
            <Image src={projectItemTestImage} alt={project.slug} fill />
          )}
        </div>
      </Link>
    </div>
  );
};
