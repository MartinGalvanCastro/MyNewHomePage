"use client";
import { PropsWithChildren, JSX } from "react";
import { IntlProvider as ReactIntlProvider, MessageDescriptor } from "react-intl";
import { useGetLocale } from "../../hooks/useGetLocale";

interface OnError extends Error {
  code: string;
  message: string;
  descriptor?: MessageDescriptor;
}

const handleError = (error: OnError): void => {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  if (error.code !== "MISSING_TRANSLATION") {
    return;
  }

  if (error.descriptor?.defaultMessage) {
    console.error(`[${error.code}]`, error.descriptor);
  }
};

export default function IntlProvider({ children }: PropsWithChildren<{}>): JSX.Element {
  const { locale } = useGetLocale();

  return (
    <ReactIntlProvider onError={handleError} locale={locale}>
      {children}
    </ReactIntlProvider>
  );
}
