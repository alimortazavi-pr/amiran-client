"use client";

import { FC } from "react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  project: IProject;
}
export const ArchitectSection: FC<IProps> = ({ project }) => {
  //Translation
  const { t, i18n } = useClientTranslation(storage.getLanguage());

  return (
    project.architect &&
    project.architect[(i18n.language as "fa" | "en") || "en"] && (
      <div className="w-full flex justify-center mt-10">
        <a
          href={project.architectWebsite ? project.architectWebsite : "#"}
          className="flex justify-center items-center gap-1"
          target="_blank"
        >
          <h3 className="text-justify text-primary/80 md:text-lg xl:text-xl">
            {t("PROJECT.ARCHITECT")}
          </h3>
          <h3 className="text-justify text-primary/80 md:text-lg xl:text-xl">
            {project.architect[(i18n.language as "fa" | "en") || "en"]}
          </h3>
        </a>
      </div>
    )
  );
};
