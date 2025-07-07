"use client";

import { Button, useDisclosure } from "@heroui/react";
import { Setting } from "iconsax-react";
import { FC } from "react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Redux
import { isAuthSelector } from "@/stores/auth/selectors";
import { useAppSelector } from "@/stores/hooks";

//Components
import { SettingDrawer } from ".";

interface IProps {
  project: IProject;
}
export const SettingBtn: FC<IProps> = ({ project }) => {
  //Redux
  const isAuth = useAppSelector(isAuthSelector);

  //NextUI
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    isAuth && (
      <>
        <Button
          isIconOnly
          className="fixed bottom-4 start-5"
          size="lg"
          color="primary"
          onPress={onOpen}
        >
          <Setting className="w-5 h-5" color="white" />
        </Button>
        <SettingDrawer
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          project={project}
        />
      </>
    )
  );
};
