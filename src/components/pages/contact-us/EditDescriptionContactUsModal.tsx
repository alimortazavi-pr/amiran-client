"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@heroui/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "@bprogress/next/app";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  contactUsEditSectionSelector,
  contactUsFormSelector,
} from "@/stores/layouts/selectors";
import {
  setContactUsEditSection,
  setContactUsForm,
  upsertDescriptionContactUsAction,
} from "@/stores/layouts/actions";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const EditDescriptionContactUsModal = () => {
  //Redux
  const dispatch = useAppDispatch();
  const editSection = useAppSelector(contactUsEditSectionSelector);
  const form = useAppSelector(contactUsFormSelector);

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Next
  const router = useRouter();

  //Translation
  const { i18n } = useClientTranslation(storage.getLanguage());

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Lifecycle
  useEffect(() => {
    if (editSection.label && !isOpen) {
      onOpen();
    } else if (!editSection.label && isOpen) {
      onClose();
    }
  }, [editSection, isOpen]);

  //Functions
  function onCloseHandler() {
    dispatch(
      setContactUsEditSection({
        label: "",
        value: undefined,
      })
    );
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    dispatch(
      setContactUsForm({
        ...form,
        [name]: {
          ...(form[name as keyof typeof form] as {
            fa: string;
            en: string;
          }),
          [i18n.language]: value,
        },
      })
    );
  }

  async function onSubmitHandler(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(upsertDescriptionContactUsAction());
      setIsLoading(false);
      toast.success(`Contact Us has been updated`, {
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
      size="3xl"
    >
      <ModalContent>
        <ModalHeader>{editSection.label}</ModalHeader>
        <ModalBody className="p-0">
          <form onSubmit={onSubmitHandler} className="p-3">
            <Textarea
              label={editSection.label}
              placeholder="Enter ..."
              value={
                editSection.value &&
                (
                  form[editSection.value as keyof typeof form] as {
                    fa: string;
                    en: string;
                  }
                )[i18n.language as "fa" | "en"]
              }
              onChange={onChangeHandler}
              name={editSection.value}
              className="w-full mb-3"
              rows={7}
              autoFocus
              size="lg"
            />
            <Button
              type="submit"
              color="primary"
              size="lg"
              className="w-full"
              isLoading={isLoading}
              isDisabled={
                editSection.value &&
                !(
                  form[editSection.value as keyof typeof form] as {
                    fa: string;
                    en: string;
                  }
                )[i18n.language as "fa" | "en"]
              }
            >
              Submit
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
