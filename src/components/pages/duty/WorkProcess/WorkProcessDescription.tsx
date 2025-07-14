"use client";

import { FC } from "react";

//Interfaces
import { IDuty } from "@/common/interfaces";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  duty: IDuty;
}
export const WorkProcessDescription: FC<IProps> = ({ duty }) => {
  //Translation
  const { t, i18n } = useClientTranslation(storage.getLanguage());

  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-medium text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl">
        {duty.workProcessTitle[(i18n.language as "fa" | "en") || "en"] ||
          t("DUTY.DutyDescriptionTitle2_Label")}
      </h4>
      <p className="text-justify font-light text-primary/30 md:text-lg xl:text-xl">
        {duty.workProcessDescription[(i18n.language as "fa" | "en") || "en"] ||
          t("DUTY.DutyDescription2_Label")}
      </p>
    </div>
  );
};
