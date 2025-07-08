"use client";

import { FC } from "react";
import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import { setEditSection } from "@/stores/projects/actions";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  project: IProject;
}
export const DescriptionSection: FC<IProps> = ({ project }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Translation
  const { t, i18n } = useClientTranslation(storage.getLanguage());

  //Functions
  function selectSection() {
    dispatch(
      setEditSection({
        label: "Description",
        value: "description",
      })
    );
  }

  return (
    <div className="flex flex-col gap-5 px-5 md:min-w-[50%] md:max-w-[50%] relative overflow-visible">
      <p className="text-justify font-light text-primary/30 md:text-lg xl:text-xl md:line-clamp-[14] xl:line-clamp-[18]">
        {project.description[(i18n.language as "fa" | "en") || "en"] ||
          t("COMMON.Lorem_Label")}
      </p>
      {isAuth && (
        <Button
          isIconOnly
          size="sm"
          variant="light"
          className="absolute -bottom-2 right-2 z-10"
          onPress={selectSection}
        >
          <Edit className="w-5 h-5" color="#1E353C" />
        </Button>
      )}
    </div>
  );
};
