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
import { useParams } from "next/navigation";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { editSectionSelector, formSelector } from "@/stores/projects/selectors";
import {
  setEditSection,
  setForm,
  updateProjectAction,
} from "@/stores/projects/actions";
import { PATHS } from "@/common/constants";

export const EditProjectModal = () => {
  //Redux
  const dispatch = useAppDispatch();
  const editSection = useAppSelector(editSectionSelector);
  const form = useAppSelector(formSelector);

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Next
  const router = useRouter();
  const params = useParams();

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
      setEditSection({
        label: "",
        value: undefined,
      })
    );
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    dispatch(
      setForm({
        ...form,
        [name]: value,
      })
    );
  }

  async function onSubmitHandler(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(updateProjectAction(params.slug as string));
      setIsLoading(false);
      toast.success(`${editSection.label} has been uploaded`, {
        position: "top-center",
      });
      if (editSection.value === "slug") {
        router.replace(PATHS.PROJECT(form.slug));
      } else {
        router.refresh();
      }
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
                (form[editSection.value as keyof typeof form] as string) || ""
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
                !(form[editSection.value as keyof typeof form] as string)
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
