import { PropsWithChildren, JSX, useContext, useState } from "react";
import { IntlProvider as ReactIntlProvider, MessageDescriptor, IntlContext } from "react-intl";
import { IntlProviderContext, SupportedLocales } from "./IntlProviderContext";

interface OnError extends Error {
  code: string;
  message: string;
  descriptor?: MessageDescriptor;
}

const handleError = (error: OnError): void => {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  if (error.code === "MISSING_TRANSLATION") {
    const logLevel = error.descriptor?.defaultMessage ? "warn" : "error";

    console[logLevel](`[${error.code}]`, error.descriptor);
  }
};

export default function IntlProvider({ children }: PropsWithChildren): JSX.Element {
  const [locale, setLocale] = useState<SupportedLocales>("en");
  const intl = useContext(IntlContext);

  const switchLocale = (newLocale: SupportedLocales): void => {
    setLocale(newLocale);
  };

  return (
    <IntlProviderContext.Provider value={{ locale, switchLocale }}>
      <ReactIntlProvider onError={handleError} locale={locale}>
        {children}
      </ReactIntlProvider>
    </IntlProviderContext.Provider>
  );
}
