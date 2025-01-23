import { useContext } from "react";
import { useIntl as useReactIntl, IntlShape, IntlContext, createIntl } from "react-intl";

export default function useIntl(): IntlShape {
  const context = useContext(IntlContext);

  if (!context) {
    throw new Error("useIntl must be used within an IntlProvider");
  }

  return useReactIntl();
}
