"use client";

import { useEffect } from "react";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@heroui/react";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isOpenMenuSelector } from "@/stores/layouts/selectors";
import { setIsOpenMenu } from "@/stores/layouts/actions";

export const MenuModalContainer = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isOpenMenu = useAppSelector(isOpenMenuSelector);

  //NextUI
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  //Lifecycle
  useEffect(() => {
    if (isOpenMenu && !isOpen) {
      onOpen();
    }
  }, [isOpenMenu]);

  //Functions
  function onCloseHandler() {
    dispatch(setIsOpenMenu(false));
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onCloseHandler}
      size="full"
    >
      <ModalContent>
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
};
