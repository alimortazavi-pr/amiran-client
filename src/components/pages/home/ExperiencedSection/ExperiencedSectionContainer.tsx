"use client";

import { useMediaQuery } from "react-responsive";
import { Button } from "@heroui/react";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";

//Components
import { ExperiencedContainer } from ".";

//Constants
import { PATHS } from "@/common/constants";

export const ExperiencedSectionContainer = () => {
  //Responsive
  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isXl = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <section aria-label="experienced section">
      <div className="flex flex-col gap-1 items-center mb-10">
        <h6 className="text-primary tracking-widest text-center text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light uppercase lg:mb-4 xl:mb-8 2xl:mb-12">
          Experienced employees of the company
        </h6>
        <Button
          color="primary"
          variant="light"
          size={isLg ? "md" : isXl ? "lg" : "sm"}
          endContent={<ArrowRight className="w-3 h-3" color="#1D363D" />}
          as={Link}
          href={PATHS.DUTY}
        >
          MORE
        </Button>
      </div>
      <ExperiencedContainer />
    </section>
  );
};
