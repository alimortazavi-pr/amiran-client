"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/react";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { toast } from "react-toastify";

//Interfaces
import { IBrandForm, INextUIModalProps } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { createBrandAction } from "@/stores/layouts/actions";
import { fetchBrandsAction } from "@/stores/why-amiran/actions";

export const CreateBrandModal: FC<INextUIModalProps> = ({
  isOpen,
  onClose,
  onOpenChange,
}) => {
  //Redux
  const dispatch = useAppDispatch();

  //States
  const [form, setForm] = useState<IBrandForm>({
    image: "",
    website: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Functions
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
        [name]: value,
      });
    }
  }

  async function onSubmitHandler(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("website", form.website);
      formData.append("brand", form.image);
      await dispatch(createBrandAction(formData));
      setIsLoading(false);
      toast.success(`The new brand has been uploaded`, {
        position: "top-center",
      });
      dispatch(fetchBrandsAction());
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
        <ModalHeader>New Brand</ModalHeader>
        <ModalBody className="p-0">
          <form onSubmit={onSubmitHandler} className="p-3">
            <Input
              label={"Website"}
              placeholder="Enter ..."
              value={form.website}
              onChange={onChangeHandler}
              name={"website"}
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
