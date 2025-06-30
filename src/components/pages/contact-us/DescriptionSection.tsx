"use client";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const DescriptionSection = () => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="flex flex-col gap-5 mb-16 lg:mb-24">
      <h4 className="font-medium text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl">
        {t("CONTACT_US.ContactUsDescriptionTitle_Label")}
      </h4>
      <p className="text-justify font-light text-primary/30 md:text-lg xl:text-2xl">
        {t("CONTACT_US.ContactUsDescription_Label")}
      </p>
    </div>
  );
};
