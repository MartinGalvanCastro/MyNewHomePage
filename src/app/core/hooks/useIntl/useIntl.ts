import { useContext } from "react";
import { useIntl as useReactIntl, IntlShape, IntlContext, createIntl } from "react-intl";

const useIntlWithNoContext = createIntl({ locale: "en" });

export default function useIntl(): IntlShape {
  const context = useContext(IntlContext);

  return context ? useReactIntl() : useIntlWithNoContext;
}
