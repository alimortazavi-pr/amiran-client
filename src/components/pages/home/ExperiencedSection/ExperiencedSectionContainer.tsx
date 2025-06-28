"use client";

import { useMediaQuery } from "react-responsive";
import { Button } from "@heroui/react";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";

//Components
import { ExperiencedContainer } from ".";

//Constants
import { PATHS } from "@/common/constants";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const ExperiencedSectionContainer = () => {
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
    <section aria-label="experienced section">
      <div className="flex flex-col gap-1 items-center mb-10">
        <h6 className="text-primary text-center text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light uppercase lg:mb-4 xl:mb-8 2xl:mb-12">
          {t("HOME.EXPERIENCED.ExperiencedTitle_Label")}
        </h6>
        <Button
          color="primary"
          variant="light"
          size={isLg ? "md" : isXl ? "lg" : "sm"}
          endContent={
            <ArrowRight
              className={`w-3 h-3 ${
                storage.getLanguage() === "fa" ? "rotate-180" : ""
              }`}
              color="#1D363D"
            />
          }
          as={Link}
          href={PATHS.DUTY}
        >
          {t("COMMON.More_Label")}
        </Button>
      </div>
      <ExperiencedContainer />
    </section>
  );
};
