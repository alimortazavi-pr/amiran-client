"use client";

import { useEffect } from "react";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@heroui/react";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isOpenMenuSelector } from "@/stores/layouts/selectors";
import { setIsOpenMenu } from "@/stores/layouts/actions";

//Components
import { PagesItems } from "./PagesItems";
import { SocialMediaItemsContainer } from "./SocialMediaItems";
import { RailSpacerContainer } from "../RailSpacer";

export const MenuModalContainer = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isOpenMenu = useAppSelector(isOpenMenuSelector);

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Lifecycle
  useEffect(() => {
    if (isOpenMenu && !isOpen) {
      onOpen();
    } else if (!isOpenMenu && isOpen) {
      onClose();
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
        <ModalBody className="p-0">
          <div className="w-full h-full bg-background flex flex-col justify-between pt-24">
            <div className="flex flex-col px-16 gap-8">
              <PagesItems />
              <SocialMediaItemsContainer />
            </div>
            <div className="p-10 flex items-end justify-center gap-x-1 opacity-75">
              <RailSpacerContainer count={6} size={28} hasMy={false} />
              <RailSpacerContainer count={10} size={28} hasMy={false} />
              <RailSpacerContainer count={8} size={28} hasMy={false} />
              <RailSpacerContainer count={12} size={28} hasMy={false} />
              <RailSpacerContainer count={9} size={28} hasMy={false} />
              <RailSpacerContainer count={4} size={28} hasMy={false} />
              <RailSpacerContainer count={10} size={28} hasMy={false} />
              <RailSpacerContainer count={12} size={28} hasMy={false} />
              <RailSpacerContainer count={7} size={28} hasMy={false} />
              <RailSpacerContainer count={11} size={28} hasMy={false} />
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
