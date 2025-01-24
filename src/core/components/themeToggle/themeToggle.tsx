"use client";

import { CommonProps } from "@/core/types/commonProps";
import { useEffect, useCallback, useState } from "react";
import { themeChange } from "theme-change";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export interface ThemeToggleProps extends CommonProps {}

export const ThemeToggle = ({ testId }: ThemeToggleProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dim";
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = isDarkTheme ? "dim" : "nord";
      document.documentElement.setAttribute("data-theme", theme);
      themeChange(false);
    }
  }, [isDarkTheme]);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev);
    const newTheme = !isDarkTheme ? "dim" : "nord";
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }, [isDarkTheme]);

  return (
    <div className="flex items-center">
      {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
      <input
        type="checkbox"
        className="toggle ml-2"
        checked={isDarkTheme}
        data-testid={testId}
        onChange={toggleTheme}
      />
    </div>
  );
};
