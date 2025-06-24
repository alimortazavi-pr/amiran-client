import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  UseDisclosureProps,
} from "@heroui/react";
import { FC } from "react";

//Components
import { ChangeSlugBtn, DeleteArticleBtn } from ".";

interface IProps {
  onOpenChange: () => void;
}
export const SettingDrawer: FC<UseDisclosureProps & IProps> = ({
  isOpen,
  onOpenChange,
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
              <ChangeSlugBtn />
              <Divider />
              <DeleteArticleBtn />
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};
