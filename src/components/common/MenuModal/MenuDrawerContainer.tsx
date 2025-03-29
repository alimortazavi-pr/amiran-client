"use client";

import { useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@heroui/react";
import { useMediaQuery } from "react-responsive";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isOpenMenuSelector } from "@/stores/layouts/selectors";
import { setIsOpenMenu } from "@/stores/layouts/actions";

//Components
import { MenuContainer } from ".";

export const MenuDrawerContainer = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isOpenMenu = useAppSelector(isOpenMenuSelector);

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  //Lifecycle
  useEffect(() => {
    if (isMd && isOpenMenu && !isOpen) {
      onOpen();
    } else if (isMd && !isOpenMenu && isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenMenu]);

  //Functions
  function onCloseHandler() {
    dispatch(setIsOpenMenu(false));
  }

  return (
    <Drawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onCloseHandler}
    >
      <DrawerContent>
        <DrawerBody className="p-0">
          <MenuContainer />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
