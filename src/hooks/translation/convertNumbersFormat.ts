"use client";

import convertAPToEnglish from "ap-to-english";
import convertToPersian from "num-to-persian";

//Redux
import { useAppSelector } from "@/stores/hooks";
import { languageSelector } from "@/stores/layouts/selectors";

export function useConvertNumbersFormat() {
  //Redux
  const language = useAppSelector(languageSelector);

  return function convertNumbersFormat(text: string) {
    if (language === "en") {
      return convertAPToEnglish(text);
    } else {
      return convertToPersian(text);
    }
  };
}

export function convertNumbersFormat(text: string, language: string) {
  if (language === "en") {
    return convertAPToEnglish(text);
  } else {
    return convertToPersian(text);
  }
}
