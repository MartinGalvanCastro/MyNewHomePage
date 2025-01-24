"use client";

import { useMemo } from "react";
import { useIntl } from "@/core/hooks/useIntl";
import { CommonProps } from "@/core/types/commonProps";
import { SupportedLocale } from "@/core/types/i18n";
import { getTranslation } from "@/core/utils/i18n";
import { defineMessages } from "react-intl";

export interface NavbarButtonProps extends CommonProps {
  onClick: () => void;
  id: "about" | "experience" | "projects" | "CV";
}

const translations = {
  en: {
    about: "About Me",
    experience: "Experience",
    projects: "Projects",
    CV: "CV",
  },
  es: {
    about: "Sobre Mi",
    experience: "Experiencia",
    projects: "Proyectos",
    CV: "CV",
  },
  pt: {
    about: "Sobre Mim",
    experience: "Experiência",
    projects: "Projetos",
    CV: "CV",
  },
};

export const NavbarButton = ({ id, testId, onClick }: NavbarButtonProps) => {
  const { formatMessage, locale } = useIntl();

  const messages = useMemo(
    () =>
      defineMessages({
        home: {
          id: "home",
          defaultMessage: getTranslation(
            { id: "home", locale: locale as SupportedLocale },
            translations
          ),
          description: "Home button",
        },
        about: {
          id: "about",
          defaultMessage: getTranslation(
            { id: "about", locale: locale as SupportedLocale },
            translations
          ),
          description: "About button",
        },
        experience: {
          id: "experience",
          defaultMessage: getTranslation(
            { id: "experience", locale: locale as SupportedLocale },
            translations
          ),
          description: "Experience button",
        },
        projects: {
          id: "projects",
          defaultMessage: getTranslation(
            { id: "projects", locale: locale as SupportedLocale },
            translations
          ),
          description: "Projects button",
        },
        CV: {
          id: "CV",
          defaultMessage: getTranslation(
            { id: "CV", locale: locale as SupportedLocale },
            translations
          ),
          description: "CV button",
        },
      }),
    []
  );

  return (
    <li onClick={onClick} data-testid={testId}>
      <a>{formatMessage(messages[id])}</a>
    </li>
  );
};
