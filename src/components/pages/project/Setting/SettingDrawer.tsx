import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  UseDisclosureProps,
} from "@heroui/react";
import { FC } from "react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Components
import { ChangeSlugBtn, DeleteProjectBtn, ImagesCountSwitch } from ".";

interface IProps {
  onOpenChange: () => void;
  project: IProject;
}
export const SettingDrawer: FC<UseDisclosureProps & IProps> = ({
  isOpen,
  onOpenChange,
  project,
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      closeButton
      placement="left"
    >
      <DrawerContent>
        {() => (
          <>
            <DrawerHeader className="flex flex-col gap-1">Setting</DrawerHeader>
            <DrawerBody className="">
              <ImagesCountSwitch project={project} />
              <Divider />
              <ChangeSlugBtn />
              <Divider />
              <DeleteProjectBtn />
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};
