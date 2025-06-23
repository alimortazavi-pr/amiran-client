"use client";

import { ChangeEvent, FC, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "@bprogress/next/app";
import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";
import { toast } from "react-toastify";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

//Constants
import { SERVER_BASE_API_URL, PATHS } from "@/common/constants";
import { upsertThumbnailArticle } from "@/stores/articles/actions";

interface IProps {
  article: IArticle;
}
export const SingleItem: FC<IProps> = ({ article }) => {
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
  const handleArticleClick = () => {
    router.push(PATHS.ARTICLE(article.slug));
  };

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
        toast.success("Thumbnail has been updated", {
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
    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
      <div className="w-full h-full relative rounded-xl shadow-md p-4 cursor-pointer max-h-[400px]" onClick={handleArticleClick}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
        <div className="w-full h-48 xl:h-56 relative mb-3">
          {article.thumbnail ? (
            <Image
              src={`${SERVER_BASE_API_URL}${article.thumbnail}`}
              alt={article.slug}
              fill
              className="object-cover rounded-xl"
            />
          ) : (
            <Image
              src={fakeImg}
              alt={article.slug}
              fill
              className="object-cover rounded-xl"
            />
          )}
        </div>
        <h6 className="font-semibold text-lg truncate">{article.title}</h6>
        <p className="text-primary/30 text-sm line-clamp-4">{article.description}</p>
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
    </div>
  );
};
