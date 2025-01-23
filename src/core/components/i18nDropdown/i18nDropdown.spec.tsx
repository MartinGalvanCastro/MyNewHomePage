import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { I18nDropdown } from "./i18nDropdown";
import * as UseGetLocale from "@/core/hooks/useGetLocale/useGetLocale";
import * as UseSwitchLocale from "@/core/hooks/useSwitchLocale/useSwitchLocale";
import { SUPPORTED_LOCALES } from "@/core/constants";
import sinon, { SinonSandbox, SinonStub } from "sinon";
import { MockedFunction } from "vitest";

describe("I18nDropdown", () => {
  let sandbox: SinonSandbox;
  let useGetLocaleStub: SinonStub;
  let useSwitchLocaleStub: SinonStub;
  let switchLocaleStub: MockedFunction<(locale: string) => void>;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    useGetLocaleStub = sandbox.stub(UseGetLocale, "useGetLocale").returns({ locale: "en" });
    switchLocaleStub = vi.fn();
    useSwitchLocaleStub = sandbox
      .stub(UseSwitchLocale, "useSwitchLocale")
      .returns({ switchLocale: switchLocaleStub });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render the current locale", () => {
    const { getByTestId } = render(<I18nDropdown testId="i18n-dropdown" />);
    expect(getByTestId("i18n-dropdown.current-en")).toBeInTheDocument();
  });

  it("should render all supported locales except the current one", () => {
    const { getByTestId } = render(<I18nDropdown testId="i18n-dropdown" />);
    SUPPORTED_LOCALES.filter((locale) => locale !== "en").forEach((locale) => {
      expect(getByTestId(`i18n-dropdown.option-${locale}`)).toBeInTheDocument();
    });
  });

  it.skip("should call switchLocale with the selected locale when an option is clicked", () => {
    const { getByTestId } = render(<I18nDropdown testId="i18n-dropdown" />);
    const localeToSelect = SUPPORTED_LOCALES.find((locale) => locale !== "en");

    if (localeToSelect) {
      fireEvent.click(getByTestId(`i18n-dropdown.current-en`));
      fireEvent.click(getByTestId(`i18n-dropdown.option-${localeToSelect}`).querySelector("a")!);
      expect(switchLocaleStub).toHaveBeenCalledWith(localeToSelect);
    }
  });
});
