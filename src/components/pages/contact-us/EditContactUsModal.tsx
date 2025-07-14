"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
} from "@heroui/react";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "@bprogress/next/app";

//Interfaces
import {
  INextUIModalProps,
  IContactUsForm,
  IContactUs,
} from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { upsertContactUsAction } from "@/stores/layouts/actions";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  contactUs: IContactUs;
}
export const EditContactUsModal: FC<IProps & INextUIModalProps> = ({
  contactUs,
  isOpen,
  onClose,
  onOpenChange,
}) => {
  //Redux
  const dispatch = useAppDispatch();

  //Next
  const router = useRouter();

  //Translation
  const { i18n } = useClientTranslation(storage.getLanguage());

  //States
  const [form, setForm] = useState<IContactUsForm>({
    title: { en: "", fa: "" },
    description: { en: "", fa: "" },
    instagram: { fa: "", en: "" },
    address: { fa: "", en: "" },
    phones: { fa: "", en: "" },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Lifecycle
  useEffect(() => {
    if (isOpen) {
      setForm({
        ...contactUs,
      });
    }
  }, [isOpen]);

  //Functions
  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: {
        ...(form[name as keyof typeof form] as {
          fa: string;
          en: string;
        }),
        [i18n.language]: value,
      },
    });
  }

  async function onSubmitHandler(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(upsertContactUsAction(form));
      setIsLoading(false);
      toast.success(`Work Process has been updated`, {
        position: "top-center",
      });
      router.refresh();
      (onClose as () => void)();
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
      });
      setIsLoading(false);
    }
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
      <ModalContent>
        <ModalHeader>Work Process</ModalHeader>
        <ModalBody className="p-0">
          <form onSubmit={onSubmitHandler} className="p-3">
            <Input
              label={"Instagram"}
              placeholder="Enter ..."
              value={form?.instagram[i18n.language as "fa" | "en"]}
              onChange={onChangeHandler}
              name={"instagram"}
              className="w-full mb-3"
              size="lg"
            />
            <Textarea
              label={"Phones"}
              placeholder="Enter ..."
              value={form?.phones[i18n.language as "fa" | "en"]}
              onChange={onChangeHandler}
              name={"phones"}
              className="w-full mb-3"
              rows={7}
              size="lg"
            />
            <Textarea
              label={"Address"}
              placeholder="Enter ..."
              value={form?.address[i18n.language as "fa" | "en"]}
              onChange={onChangeHandler}
              name={"address"}
              className="w-full mb-3"
              rows={7}
              size="lg"
            />
            <Button
              type="submit"
              color="primary"
              size="lg"
              className="w-full"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
