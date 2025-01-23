import { CommonProps } from "@/core/types/commonProps";
import { useEffect, useCallback, useState } from "react";
import { themeChange } from "theme-change";

export interface ThemeToggleProps extends CommonProps {}

export const ThemeToggle = ({ testId }: ThemeToggleProps) => {
  const [theme, setTheme] = useState<string>("nord");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "nord";
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
      themeChange(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      themeChange(false);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "nord" ? "night" : "nord";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }, [theme]);

  return (
    <input
      type="checkbox"
      className="toggle"
      checked={theme === "night"}
      data-testid={testId}
      onClick={toggleTheme}
    />
  );
};
