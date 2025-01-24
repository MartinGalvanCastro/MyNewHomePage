"use client";

import React from "react";
import { useGetLocale } from "@/core/hooks/useGetLocale";
import { useSwitchLocale } from "@/core/hooks/useSwitchLocale";
import { SUPPORTED_LOCALES } from "@/core/constants";
import { CommonProps } from "@/core/types/commonProps";

export interface I18nDropdownProps extends CommonProps {}

export const I18nDropdown: React.FC<I18nDropdownProps> = ({ testId }) => {
  const { locale: currentLocale } = useGetLocale();
  const { switchLocale } = useSwitchLocale();

  return (
    <div className="dropdown" data-testid={testId}>
      <div
        tabIndex={0}
        role="button"
        className="btn m-1"
        data-testid={`${testId}.current-${currentLocale}`}
      >
        {currentLocale.toUpperCase()}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
      >
        {SUPPORTED_LOCALES.filter((locale) => locale !== currentLocale).map((locale) => (
          <li key={locale} data-testid={`${testId}.option-${locale}`}>
            <a
              onClick={() => {
                switchLocale(locale);
              }}
            >
              {locale.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
