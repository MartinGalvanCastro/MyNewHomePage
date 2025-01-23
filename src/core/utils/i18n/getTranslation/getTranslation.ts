import { SupportedLocale } from "@/core/types/i18n";
import { MessageDescriptor } from "react-intl";
export type Translations = {
  [locale in SupportedLocale]: { [id: string]: string };
};

export interface GetTranslationProps {
  locale: SupportedLocale;
  id: string;
}

export const getTranslation = (
  { locale, id }: GetTranslationProps,
  translations: Translations
): string => {
  return translations[locale][id] ?? id;
};
