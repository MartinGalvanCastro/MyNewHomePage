import { AppProvider } from "@/core/providers/AppProvider";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";

export function renderWithAppProviders(ui: ReactElement, options?: RenderOptions) {
  return render(ui, {
    wrapper: ({ children }) => <AppProvider>{children}</AppProvider>,
    ...options,
  });
}
