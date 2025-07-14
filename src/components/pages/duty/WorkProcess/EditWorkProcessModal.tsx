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
  IDuty,
  IWorkProcessForm,
} from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { upsertWorkProcessAction } from "@/stores/duty/actions";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  duty: IDuty;
}
export const EditWorkProcessModal: FC<IProps & INextUIModalProps> = ({
  duty,
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
  const [form, setForm] = useState<IWorkProcessForm>({
    workProcessTitle: { fa: "", en: "" },
    workProcessDescription: { fa: "", en: "" },
    workProcessImage: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Lifecycle
  useEffect(() => {
    if (isOpen) {
      setForm({
        ...duty,
      });
    }
  }, [isOpen]);

  //Functions
  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name } = e.target;

    if (name === "image") {
      setForm({
        ...form,
        workProcessImage: e.target.files ? e.target.files[0] : "",
      });
    } else {
      const { value } = e.target;
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
  }

  async function onSubmitHandler(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("workProcessTitle[fa]", form.workProcessTitle.fa);
      formData.append("workProcessTitle[en]", form.workProcessTitle.en);
      formData.append(
        "workProcessDescription[fa]",
        form.workProcessDescription.fa
      );
      formData.append(
        "workProcessDescription[en]",
        form.workProcessDescription.en
      );
      formData.append("image", form.workProcessImage);
      await dispatch(upsertWorkProcessAction(formData));
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
              label={"Title"}
              placeholder="Enter ..."
              value={form?.workProcessTitle[i18n.language as "fa" | "en"]}
              onChange={onChangeHandler}
              name={"workProcessTitle"}
              className="w-full mb-3"
              size="lg"
            />
            <Input
              label={"Image"}
              placeholder="Upload image"
              type="file"
              onChange={onChangeHandler}
              name={"image"}
              className="w-full mb-3"
              size="lg"
            />
            <Textarea
              label={"Description"}
              placeholder="Enter ..."
              value={form?.workProcessDescription[i18n.language as "fa" | "en"]}
              onChange={onChangeHandler}
              name={"workProcessDescription"}
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
