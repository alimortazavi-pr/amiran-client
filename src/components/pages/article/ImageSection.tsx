"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";
import { ChangeEvent, FC, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "@bprogress/next/app";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import { upsertThumbnailArticle } from "@/stores/articles/actions";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

//Constants
import { SERVER_BASE_API_URL } from "@/common/constants";

interface IProps {
  article: IArticle;
}
export const ImageSection: FC<IProps> = ({ article }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Next
  const router = useRouter();

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Refs
  const fileInputRef = useRef<HTMLInputElement>(null);

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
        formData.append("thumbnail", e?.target?.files[0]);
        await dispatch(upsertThumbnailArticle(formData, article.slug));
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
    <div className="w-full h-96 lg:h-[420px] xl:h-[500px] relative mb-5">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />

      {article.thumbnail ? (
        <Image
          fill
          src={`${SERVER_BASE_API_URL}${article.thumbnail}`}
          alt="Image 1"
          className="w-full h-full object-cover rounded-xl"
        />
      ) : (
        <Image
          fill
          src={fakeImg}
          alt="Image 1"
          className="w-full h-full object-cover rounded-xl"
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
