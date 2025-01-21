import React from "react";
import { renderHook } from "@testing-library/react";
import { IntlProvider } from "../../providers/IntlProvider";
import useIntl from "./useIntl";

const messages = {
  en: { "test.message": "This is a test" },
  es: { "test.message": "Esto es una prueba" },
  pt: { "test.message": "Isto é um teste" },
};

describe("useIntl", () => {
  it("should default to English if used without IntlProvider", () => {
    const { result } = renderHook(() => useIntl());
    expect(result.current.formatMessage({ id: "test.message" })).toBe("test.message");
  });

  it("should format message in English when locale is en", () => {
    const { result } = renderHook(() => useIntl(), {
      wrapper: ({ children }) => (
        <IntlProvider locale="en" messages={messages.en}>
          {children}
        </IntlProvider>
      ),
    });
    expect(result.current.formatMessage({ id: "test.message" })).toBe("This is a test");
  });

  it("should format message in Spanish when locale is es", () => {
    const { result } = renderHook(() => useIntl(), {
      wrapper: ({ children }) => (
        <IntlProvider locale="es" messages={messages.es}>
          {children}
        </IntlProvider>
      ),
    });
    expect(result.current.formatMessage({ id: "test.message" })).toBe("Esto es una prueba");
  });

  it("should format message in Portuguese when locale is pt", () => {
    const { result } = renderHook(() => useIntl(), {
      wrapper: ({ children }) => (
        <IntlProvider locale="pt" messages={messages.pt}>
          {children}
        </IntlProvider>
      ),
    });
    expect(result.current.formatMessage({ id: "test.message" })).toBe("Isto é um teste");
  });
});
