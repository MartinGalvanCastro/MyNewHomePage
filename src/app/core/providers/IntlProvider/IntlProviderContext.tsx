import { createContext } from "react";
import { always } from "../../utils/functions/always";

export type SupportedLocales = "en" | "es" | "pt";

export interface IntlProviderContextProps {
  locale: string;
  switchLocale: (locale: SupportedLocales) => void;
}

export const IntlProviderContext = createContext<IntlProviderContextProps>({
  locale: "en",
  switchLocale: always.void,
});
