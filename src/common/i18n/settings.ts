export const fallbackLng: string = "en";
export const languages: string[] = [fallbackLng, "fa"];
export const defaultNS: string = "common";
export const cookieName: string = "language";

export function getOptions(lng: string = fallbackLng, ns: string = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
