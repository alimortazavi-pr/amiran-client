"use client";

import { Button } from "@heroui/react";
import { ArrowRight } from "iconsax-react";

//Components
import { ProjectsContainer } from ".";

export const ProjectsSectionContainer = () => {
  return (
    <section aria-label="projects section">
      <div className="flex flex-col gap-1 items-center mb-20">
        <h6 className="tracking-[1.5rem] text-primary text-xl font-light">
          PROJECT<span className="!tracking-[0rem]">S</span>
        </h6>
        <Button
          color="primary"
          variant="light"
          size="sm"
          endContent={<ArrowRight className="w-3 h-3" color="#1D363D" />}
        >
          MORE
        </Button>
      </div>
      <ProjectsContainer />
    </section>
  );
};
