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
import { editSectionSelector, formSelector } from "@/stores/articles/selectors";
import {
  setEditSection,
  setForm,
  updateArticleAction,
} from "@/stores/articles/actions";

//Constants
import { PATHS } from "@/common/constants";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const EditArticleModal = () => {
  //Redux
  const dispatch = useAppDispatch();
  const editSection = useAppSelector(editSectionSelector);
  const form = useAppSelector(formSelector);

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Next
  const router = useRouter();
  const params = useParams();

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
      setEditSection({
        label: "",
        value: undefined,
      })
    );
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (editSection.value === "slug") {
      dispatch(
        setForm({
          ...form,
          slug: value,
        })
      );
    } else {
      dispatch(
        setForm({
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
  }

  async function onSubmitHandler(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(updateArticleAction(params.slug as string));
      setIsLoading(false);
      toast.success(`${editSection.label} has been uploaded`, {
        position: "top-center",
      });
      if (editSection.value === "slug") {
        router.replace(PATHS.ARTICLE(form.slug));
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
                editSection.value
                  ? editSection.value === "slug"
                    ? (form[
                        editSection.value as keyof typeof form
                      ] as string) || ""
                    : (
                        form[editSection.value as keyof typeof form] as {
                          fa: string;
                          en: string;
                        }
                      )[i18n.language as "fa" | "en"]
                  : ""
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
