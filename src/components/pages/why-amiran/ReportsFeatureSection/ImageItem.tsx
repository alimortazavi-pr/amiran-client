"use client";

import { ChangeEvent, FC, useMemo, useRef, useState } from "react";
import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";
import { toast } from "react-toastify";
import { useRouter } from "@bprogress/next/app";
import Image from "next/image";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import { upsertReportImageAction } from "@/stores/why-amiran/actions";
import { reportsImagesSelector } from "@/stores/why-amiran/selectors";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

//Constants
import { BASE_API_URL } from "@/common/constants";

interface IProps {
  index: number;
}
export const ImageItem: FC<IProps> = ({ index }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);
  const reportsImages = useAppSelector(reportsImagesSelector);

  //Next
  const router = useRouter();

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Refs
  const fileInputRef = useRef<HTMLInputElement>(null);

  //LifeCycle
  const image = useMemo(
    () =>
      reportsImages?.find(
        (ei) => ei.weight.toString() === (index + 1).toString()
      ),
    [reportsImages]
  );

  //Functions
  function selectImage() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e?.target?.files) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("image", e?.target?.files[0]);
        await dispatch(
          upsertReportImageAction(formData, (index + 1).toString())
        );
        setIsLoading(false);
        toast.success("Image has been updated", {
          position: "top-center",
        });
        router.refresh();
      } catch (error: any) {
        toast.error(error.message, {
          position: "top-center",
        });
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="col-span-4 rounded-full relative h-48 md:col-span-2 md:h-60 lg:h-72 xl:h-96">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />

      {image ? (
        <Image
          fill
          src={`${BASE_API_URL}${image.url}`}
          alt="Image 1"
          className={`w-full h-full object-cover rounded-full`}
        />
      ) : (
        <Image
          fill
          src={fakeImg}
          alt="Image 1"
          className={`w-full h-full object-cover rounded-full`}
        />
      )}

      {isAuth && (
        <Button
          isIconOnly
          size="sm"
          variant="light"
          className="absolute top-2 right-2"
          onPress={selectImage}
          isLoading={isLoading}
        >
          <Edit className="w-5 h-5" color="#1E353C" />
        </Button>
      )}
    </div>
  );
};
