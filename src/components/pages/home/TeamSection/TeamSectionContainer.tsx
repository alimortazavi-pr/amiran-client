"use client";

import { Button } from "@heroui/react";
import { ArrowRight } from "iconsax-react";

//Components
import { TeamContainer } from ".";

export const TeamSectionContainer = () => {
  return (
    <section aria-label="team section">
      <div className="flex flex-col gap-1 items-center mb-10">
        <h6 className="text-primary tracking-widest text-center text-xl font-light uppercase">
          Experienced employees of the company
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
      <TeamContainer />
    </section>
  );
};
