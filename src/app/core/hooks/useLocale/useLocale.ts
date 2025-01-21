import { useContext } from "react";
import { IntlProviderContext, IntlProviderContextProps } from "../../providers/IntlProvider";

export const useLocale = (): IntlProviderContextProps => {
  const { locale, setLocale } = useContext(IntlProviderContext);
  return { locale, setLocale };
};
