"use client";

import {
  Button,
  Input,
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

//Interfaces
import { ITeamForm } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { setSelectedTeam, updateTeamAction } from "@/stores/duty/actions";
import {
  isDeletingTeamSelector,
  selectedTeamSelector,
} from "@/stores/duty/selectors";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const EditTeamModal = () => {
  //Redux
  const dispatch = useAppDispatch();
  const selectedTeam = useAppSelector(selectedTeamSelector);
  const isDeletingTeam = useAppSelector(isDeletingTeamSelector);

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Next
  const router = useRouter();

  //Translation
  const { i18n } = useClientTranslation(storage.getLanguage());

  //States
  const [form, setForm] = useState<ITeamForm>({
    firstName: { fa: "", en: "" },
    lastName: { fa: "", en: "" },
    description: { fa: "", en: "" },
    image: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Lifecycle
  useEffect(() => {
    if (selectedTeam && !isOpen && !isDeletingTeam) {
      onOpen();
      setForm(selectedTeam);
    } else if (!selectedTeam && isOpen && !isDeletingTeam) {
      onClose();
    }
  }, [selectedTeam, isOpen]);

  //Functions
  function onCloseHandler() {
    dispatch(setSelectedTeam(undefined));
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name } = e.target;

    if (name === "image") {
      setForm({
        ...form,
        image: e.target.files ? e.target.files[0] : "",
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
      formData.append("firstName[fa]", form.firstName.fa);
      formData.append("firstName[en]", form.firstName.en);
      formData.append("lastName[fa]", form.lastName.fa);
      formData.append("lastName[en]", form.lastName.en);
      formData.append("description[fa]", form.description.fa);
      formData.append("description[en]", form.description.en);
      formData.append("image", form.image);
      await dispatch(updateTeamAction(selectedTeam?._id as string, formData));
      setIsLoading(false);
      toast.success(
        `${selectedTeam?.firstName[i18n.language as "fa" | "en"]} ${
          selectedTeam?.lastName[i18n.language as "fa" | "en"]
        } has been uploaded`,
        {
          position: "top-center",
        }
      );
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
        <ModalHeader>
          {selectedTeam?.firstName[i18n.language as "fa" | "en"]}{" "}
          {selectedTeam?.lastName[i18n.language as "fa" | "en"]}
        </ModalHeader>
        <ModalBody className="p-0">
          <form onSubmit={onSubmitHandler} className="p-3">
            <Input
              label={"First Name"}
              placeholder="Enter ..."
              value={form?.firstName[i18n.language as "fa" | "en"]}
              onChange={onChangeHandler}
              name={"firstName"}
              className="w-full mb-3"
              size="lg"
            />
            <Input
              label={"Last Name"}
              placeholder="Enter ..."
              value={form?.lastName[i18n.language as "fa" | "en"]}
              onChange={onChangeHandler}
              name={"lastName"}
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
              value={form?.description[i18n.language as "fa" | "en"]}
              onChange={onChangeHandler}
              name={"description"}
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
