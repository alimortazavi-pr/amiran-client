"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Add, Trash } from "iconsax-react";
import { ChangeEvent, FC, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "@bprogress/next/app";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import {
  hardDeleteArticleImageAction,
  upsertArticleImagesAction,
} from "@/stores/articles/actions";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

//Constants
import { SERVER_BASE_API_URL } from "@/common/constants";

interface IProps {
  article: IArticle;
}
export const ImagesSection: FC<IProps> = ({ article }) => {
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
        formData.append("image", e?.target?.files[0]);
        await dispatch(upsertArticleImagesAction(article, formData));
        setIsLoading(false);
        toast.success("Image has been uploaded", {
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

  async function deleteImageHandler(imageId: string) {
    setIsLoading(true);
    try {
      await dispatch(hardDeleteArticleImageAction(imageId));
      setIsLoading(false);
      toast.success(`Plan has been uploaded`, {
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

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
      {isAuth && (
        <Button
          isIconOnly
          color="primary"
          className="mb-3"
          onPress={selectImage}
          isLoading={isLoading}
        >
          <Add className="w-5 h-5" color="white" />
        </Button>
      )}
      <div className="w-full h-96 lg:h-[420px] xl:h-[500px] relative mb-5">
        {article.images?.length > 0 ? (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="w-full h-full"
          >
            {article.images.map((image) => (
              <SwiperSlide key={image._id}>
                <div className="relative w-full h-full">
                  <Image
                    fill
                    src={`${SERVER_BASE_API_URL}${image.url}`}
                    alt="Image 1"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {isAuth && (
                    <Button
                      isIconOnly
                      size="sm"
                      variant="light"
                      className="absolute top-2 start-2 z-10"
                      color="danger"
                      isLoading={isLoading}
                      onPress={() => deleteImageHandler(image._id)}
                    >
                      <Trash className="w-5 h-5" color="red" />
                    </Button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Image
            fill
            src={fakeImg}
            alt="Image 1"
            className="w-full h-full object-cover rounded-xl"
          />
        )}
      </div>
    </>
  );
};
