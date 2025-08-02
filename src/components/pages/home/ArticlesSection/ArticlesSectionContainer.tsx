"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowRight } from "iconsax-react";
import { useMediaQuery } from "react-responsive";
import { FC } from "react";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Components
import { ArticlesContainer } from ".";

//Constants
import { PATHS } from "@/common/constants";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  articles: IArticle[];
}
export const ArticlesSectionContainer: FC<IProps> = ({ articles }) => {
  //Responsive
  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isXl = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  //Translation
  const { t, i18n } = useClientTranslation(storage.getLanguage());

  return (
    <section aria-label="articles section">
      <div className="flex flex-col gap-1 items-center mb-20">
        <h6
          className={`text-primary text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light lg:mb-4 xl:mb-8 2xl:mb-12 ${
            i18n.language === "fa"
              ? ""
              : "tracking-[24px] md:tracking-[64px] lg:tracking-[96px] xl:tracking-[8rem] 2xl:tracking-[8rem]"
          }`}
        >
          {t("BLOG.BlogTitle1_Label")}
          <span className="!tracking-[0rem]">{t("BLOG.BlogTitle2_Label")}</span>
        </h6>
        <Button
          color="primary"
          variant="light"
          size={isLg ? "md" : isXl ? "lg" : "sm"}
          endContent={
            <ArrowRight
              className={`w-3 h-3 ${
                i18n.language === "fa" ? "rotate-180" : ""
              }`}
              color="#1D363D"
            />
          }
          as={Link}
          href={PATHS.ARTICLES}
        >
          {t("COMMON.More_Label")}
        </Button>
      </div>
      <ArticlesContainer articles={articles} />
    </section>
  );
};
