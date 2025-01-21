import { SupportedLocales } from "@/app/core/providers/IntlProvider";

export type Translations = {
  [locale in SupportedLocales]: { [id: string]: string };
};

export interface GetTranslationProps {
  locale?: SupportedLocales;
  id: string;
}

export const getTranslation = (
  { locale = "en", id }: GetTranslationProps,
  translations: Translations
): string => {
  return translations[locale][id] ?? id;
};
