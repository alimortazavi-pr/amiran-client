import jsCookies from "js-cookie";
import { cookieName } from "@/common/i18n";

//Types
import { languagesType } from "../types";

export const storage = {
  getDarkMode: (): boolean => {
    return jsCookies.get("dark-mode") === "true";
  },
  setDarkMode: (darkMode: string) => {
    jsCookies.set("dark-mode", darkMode, { expires: 90 });
  },
  getLanguage: (): languagesType => {
    const language = (jsCookies.get(cookieName) as languagesType) || "en";
    return language;
  },
  setLanguage: (language: languagesType) => {
    jsCookies.set("language", language, { expires: 90 });
  },
  getToken: (): string | undefined => {
    return jsCookies.get("token");
  },
  setToken: (token: string) => {
    jsCookies.set("token", token, { expires: 90 });
  },
  removeToken: () => {
    jsCookies.remove("token");
  },
};
