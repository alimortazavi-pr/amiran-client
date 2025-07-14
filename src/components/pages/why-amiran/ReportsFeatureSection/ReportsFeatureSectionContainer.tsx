"use client";

import { useEffect } from "react";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { reportsImagesSelector } from "@/stores/why-amiran/selectors";
import { fetchReportsImagesAction } from "@/stores/why-amiran/actions";

//Components
import { ImagesSection } from ".";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const ReportsFeatureSectionContainer = () => {
  //Redux
  const dispatch = useAppDispatch();
  const reportsImages = useAppSelector(reportsImagesSelector);

  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  //Lifecycle
  useEffect(() => {
    if (!reportsImages) {
      fetchReportsImages();
    }
  }, [reportsImages]);

  //Functions
  function fetchReportsImages() {
    try {
      dispatch(fetchReportsImagesAction());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col gap-4 mb-14 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
      <div className="flex items-center gap-2 xl:gap-3">
        <div className="h-10 min-w-2 md:h-12 md:min-w-3 xl:h-14 xl:min-w-4 bg-primary rounded-full"></div>
        <h6 className="text-primary text-sm font-medium min-h-10 flex items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          {t("WHY_AMIRAN.WhyAmiranReportsFeatureSection_Label")}
        </h6>
      </div>
      <ImagesSection />
    </div>
  );
};
