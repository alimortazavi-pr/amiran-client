"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { FC, useEffect, useState } from "react";
import { useRouter } from "@bprogress/next/app";
import { toast } from "react-toastify";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  isDeletingTeamSelector,
  selectedTeamSelector,
} from "@/stores/duty/selectors";
import {
  hardDeleteTeam,
  setIsDeletingTeam,
  setSelectedTeam,
} from "@/stores/duty/actions";

export const DeleteTeamModal: FC = () => {
  //Redux
  const dispatch = useAppDispatch();
  const selectedTeam = useAppSelector(selectedTeamSelector);
  const isDeletingTeam = useAppSelector(isDeletingTeamSelector);

  //Next
  const router = useRouter();

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Lifecycle
  useEffect(() => {
    if (selectedTeam && isDeletingTeam && !isOpen) {
      onOpen();
    } else if (isOpen && (!selectedTeam || !isDeletingTeam)) {
      onClose();
    }
  }, [selectedTeam]);

  //Functions
  function onCloseHandler() {
    dispatch(setSelectedTeam(undefined));
    dispatch(setIsDeletingTeam(false));
  }

  async function deleteTeamHandler() {
    setIsLoading(true);
    try {
      await dispatch(hardDeleteTeam(selectedTeam?._id as string));
      setIsLoading(false);
      toast.success("User has been successfully deleted", {
        position: "top-center",
      });
      router.refresh();
      onCloseHandler();
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
      });
      setIsLoading(false);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onCloseHandler}
      scrollBehavior="outside"
      placement="center"
    >
      <ModalContent>
        <ModalHeader>Delete User</ModalHeader>
        <ModalBody className="px-6 py-3 gap-2">
          <div>
            <p className="font-medium">Are you sure?</p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button color="primary" variant="light" onPress={onCloseHandler}>
              Cancel
            </Button>
            <Button
              color="danger"
              variant="flat"
              onPress={deleteTeamHandler}
              isLoading={isLoading}
            >
              Delete
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
