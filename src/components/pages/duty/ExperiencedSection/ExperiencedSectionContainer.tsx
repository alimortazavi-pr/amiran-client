"use client";

//Components
import { ExperiencedContainer } from ".";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const ExperiencedSectionContainer = () => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <section aria-label="experienced section" className="mb-20 lg:mb-40">
      <div className="flex flex-col gap-1 items-center mb-10">
        <h6 className="text-primary text-center text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light uppercase lg:mb-4 xl:mb-8 2xl:mb-12">
          {t("HOME.EXPERIENCED.ExperiencedTitle_Label")}
        </h6>
      </div>
      <ExperiencedContainer />
    </section>
  );
};
