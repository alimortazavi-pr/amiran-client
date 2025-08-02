"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

//Interfaces
import { IBrandForm, IBrandImage } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { updateBrandAction } from "@/stores/layouts/actions";
import { fetchBrandsAction } from "@/stores/why-amiran/actions";

interface IProps {
  selectedBrand: IBrandImage;
  setSelectedBrand: Dispatch<SetStateAction<IBrandImage>>;
}
export const EditBrandModal: FC<IProps> = ({
  selectedBrand,
  setSelectedBrand,
}) => {
  //Redux
  const dispatch = useAppDispatch();

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //States
  const [form, setForm] = useState<IBrandForm>({
    image: "",
    website: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Lifecycle
  useEffect(() => {
    if (selectedBrand.image && !isOpen) {
      onOpen();
      setForm({
        website: selectedBrand.website,
        image: selectedBrand.image,
      });
    } else if (!selectedBrand.image && isOpen) {
      onClose();
    }
  }, [isOpen, selectedBrand]);

  //Functions
  function onCloseHandler() {
    setSelectedBrand({
      _id: "",
      image: "",
      website: "",
    });
    setForm({
      image: "",
      website: "",
    });
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
      await dispatch(updateBrandAction(selectedBrand._id, formData));
      setIsLoading(false);
      toast.success(`The brand has been updated`, {
        position: "top-center",
      });
      dispatch(fetchBrandsAction());
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
        <ModalHeader>Edit Brand</ModalHeader>
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
