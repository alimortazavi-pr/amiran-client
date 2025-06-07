import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  UseDisclosureProps,
} from "@heroui/react";
import { FC } from "react";

interface IProps {
  onOpenChange: () => void;
}
export const SettingDrawer: FC<UseDisclosureProps & IProps> = ({
  isOpen,
  onOpenChange,
}) => {
  return (
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange} closeButton placement="left">
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1">Setting</DrawerHeader>
            <DrawerBody></DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};
