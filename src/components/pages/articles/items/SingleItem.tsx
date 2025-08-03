"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useRouter } from "@bprogress/next/app";
import { toast } from "react-toastify";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import {
  pin1ArticleAction,
  pin2ArticleAction,
} from "@/stores/articles/actions";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

//Constants
import { SERVER_BASE_API_URL, PATHS } from "@/common/constants";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

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

  //Functions
  async function pin1Func() {
    setIsLoading(true);
    try {
      await dispatch(pin1ArticleAction(article.slug));
      setIsLoading(false);
      toast.success("Article pined successfully", {
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

  async function pin2Func() {
    setIsLoading(true);
    try {
      await dispatch(pin2ArticleAction(article.slug));
      setIsLoading(false);
      toast.success("Article pined successfully", {
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

  //Translation
  const { i18n } = useClientTranslation(storage.getLanguage());

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 relative">
      <Link href={PATHS.ARTICLE(article.slug)}>
        <div className="w-full h-full relative rounded-xl shadow-md p-4 cursor-pointer max-h-[400px]">
          <div className="w-full h-48 xl:h-56 relative mb-3">
            {article.images?.length > 0 ? (
              <Image
                src={`${SERVER_BASE_API_URL}${article.images[0].url}`}
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
          <h6 className="font-semibold text-lg truncate">
            {article.title[i18n.language as "fa" | "en"]}
          </h6>
          <p className="text-primary/30 text-sm line-clamp-4">
            {article.content[i18n.language as "fa" | "en"]}
          </p>
        </div>
      </Link>
      {isAuth && (
        <div className="absolute -bottom-5 end-0 flex items-center justify-center gap-1 w-full">
          <Button
            size="sm"
            variant="flat"
            className=""
            onPress={pin1Func}
            isLoading={isLoading}
            isDisabled={article.pin1}
          >
            PIN 1
          </Button>
          <Button
            size="sm"
            variant="flat"
            className=""
            onPress={pin2Func}
            isLoading={isLoading}
            isDisabled={article.pin2}
          >
            PIN 2
          </Button>
        </div>
      )}
    </div>
  );
};
