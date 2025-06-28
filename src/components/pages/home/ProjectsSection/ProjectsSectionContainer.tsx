"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowRight } from "iconsax-react";
import { useMediaQuery } from "react-responsive";
import { FC } from "react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Components
import { ProjectsContainer } from ".";

//Constants
import { PATHS } from "@/common/constants";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  projects: IProject[];
}
export const ProjectsSectionContainer: FC<IProps> = ({ projects }) => {
  //Responsive
  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isXl = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <section aria-label="projects section">
      <div className="flex flex-col gap-1 items-center mb-20">
        <h6
          className={`text-primary text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light lg:mb-4 xl:mb-8 2xl:mb-12 ${
            storage.getLanguage() === "fa"
              ? ""
              : "tracking-[24px] md:tracking-[64px] lg:tracking-[96px] xl:tracking-[8rem] 2xl:tracking-[8rem]"
          }`}
        >
          {t("HOME.PROJECTS.ProjectTitle1_Label")}
          <span className="!tracking-[0rem]">
            {t("HOME.PROJECTS.ProjectTitle2_Label")}
          </span>
        </h6>
        <Button
          color="primary"
          variant="light"
          size={isLg ? "md" : isXl ? "lg" : "sm"}
          endContent={<ArrowRight className={`w-3 h-3 ${storage.getLanguage() === "fa" ? "rotate-180" : ""}`} color="#1D363D" />}
          as={Link}
          href={PATHS.PROJECTS}
        >
          {t("COMMON.More_Label")}
        </Button>
      </div>
      <ProjectsContainer projects={projects} />
    </section>
  );
};
