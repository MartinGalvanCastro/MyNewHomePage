import { useMemo } from "react";
import { SupportedLocale } from "@/core/types/i18n";
import { usePathname } from "next/navigation";
import { SUPPORTED_LOCALES } from "@/core/constants";

export interface UseGetLocaleFromBrowserResult {
  locale: SupportedLocale;
}

const isSupportedLocale = (locale: any): locale is SupportedLocale => {
  return SUPPORTED_LOCALES.includes(locale);
};

export const useGetLocale = (): UseGetLocaleFromBrowserResult => {
  const pathname = usePathname();
  const locale = pathname ? pathname.split("/")[1] : "";

  return useMemo(() => ({ locale: isSupportedLocale(locale) ? locale : "en" }), [locale]);
};
