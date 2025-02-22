"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import {
  UseTranslationOptions,
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import jsCookie from "js-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  getOptions,
  languages,
  cookieName,
  defaultNS,
} from "@/common/i18n/settings";

const runsOnServerSide = typeof window === "undefined";

//
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./../../common/i18n/locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useClientTranslation(
  lng: string,
  ns: string = defaultNS,
  options: UseTranslationOptions<undefined> = {}
) {
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng);
    }, [lng, i18n]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (jsCookie.get(cookieName) === lng) {
        return;
      } else {
        jsCookie.set(cookieName, lng, { path: "/", expires: 90 });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lng, jsCookie.get(cookieName)]);
  }
  return ret;
}
