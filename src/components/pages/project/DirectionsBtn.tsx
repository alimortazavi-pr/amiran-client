"use client";

import { Button } from "@heroui/react";
import { Edit, Map } from "iconsax-react";
import { FC } from "react";
import Link from "next/link";

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
export const DirectionsBtn: FC<IProps> = ({ project }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  //Functions
  function selectSection() {
    dispatch(
      setEditSection({
        label: "Directions",
        value: "directions",
      })
    );
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-fit relative">
        <Button
          aria-label="go to directions"
          startContent={<Map className="w-5 h-5" color="white" />}
          className="rounded-full bg-primary/30 text-default-50 w-full max-w-60 lg:max-w-80 lg:h-12 lg:text-lg"
          as={Link}
          href={
            project.directions
              ? `https://www.google.com/maps/place/${project.directions}`
              : "#"
          }
          target="_blank"
        >
          {t("PROJECT.GetDirections_Label")}
        </Button>
        {isAuth && (
          <Button
            isIconOnly
            size="sm"
            variant="light"
            className="absolute -bottom-4 z-10"
            onPress={selectSection}
          >
            <Edit className="w-5 h-5" color="#1E353C" />
          </Button>
        )}
      </div>
    </div>
  );
};
