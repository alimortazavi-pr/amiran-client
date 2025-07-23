"use client";

import { FC } from "react";
import Image from "next/image";
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
export const SingleItem: FC<IProps> = ({ article }) => {
  //Translation
  const { i18n } = useClientTranslation(storage.getLanguage());

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
      <Link href={PATHS.ARTICLE(article.slug)}>
        <div className="w-full h-full relative rounded-xl shadow-md p-4 cursor-pointer max-h-[400px]">
          <div className="w-full h-48 xl:h-56 relative mb-3">
            {article.images?.length > 0 ? (
              <Image
                src={`${SERVER_BASE_API_URL}${article.images[0]}`}
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
    </div>
  );
};
