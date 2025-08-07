"use client";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

//Interfaces
import { IArticle } from "@/common/interfaces";

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
export const ArticleItem: FC<IProps> = ({ article }) => {
  //Translation
  const { i18n } = useClientTranslation(storage.getLanguage());

  return (
    <div className="col-span-2 md:col-span-1 cursor-pointer">
      <Link href={PATHS.ARTICLE(article.slug)}>
        <div className="w-full h-full relative rounded-full shadow-md cursor-pointer max-h-[400px]">
          <div className="w-full h-80 lg:h-[400px] relative">
            {article.images?.length > 0 ? (
              <Image
                src={`${SERVER_BASE_API_URL}${article.images[0].url}`}
                alt={article.slug}
                fill
                className="object-cover rounded-full"
              />
            ) : (
              <Image
                src={fakeImg}
                alt={article.slug}
                fill
                className="object-cover rounded-full"
              />
            )}
            <div className="p-4 pb-8 absolute bottom-0 max-w-full bg-primary-50/40 backdrop-blur rounded-b-full">
              <h6 className="font-semibold text-lg truncate text-center">
                {article.title[i18n.language as "fa" | "en"]}
              </h6>
              <p className="text-primary/60 text-sm line-clamp-4 text-center">
                {article.content[i18n.language as "fa" | "en"]}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
