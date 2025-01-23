import React from "react";
import { renderHook } from "@testing-library/react";
import { IntlProvider } from "../../providers/IntlProvider";
import useIntl from "./useIntl";
import sinon, { SinonSandbox } from "sinon";
import { defineMessage } from "react-intl";

const messages = {
  en: defineMessage({ id: "test.message", defaultMessage: "This is a test" }),
  es: defineMessage({ id: "test.message", defaultMessage: "Esto es una prueba" }),
  pt: defineMessage({ id: "test.message", defaultMessage: "Isto é um teste" }),
};

describe("useIntl", () => {
  let sandbox: SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should throw an error if used without IntlProvider", () => {
    expect(() => {
      renderHook(() => useIntl());
    }).toThrowError("useIntl must be used within an IntlProvider");
  });

  it("should resolve to the default message", () => {
    const { result } = renderHook(() => useIntl(), {
      wrapper: ({ children }) => <IntlProvider>{children}</IntlProvider>,
    });
    expect(result.current.formatMessage(messages.es)).toBe("Esto es una prueba");
    expect(result.current.formatMessage(messages.en)).toBe("This is a test");
    expect(result.current.formatMessage(messages.pt)).toBe("Isto é um teste");
  });
});
