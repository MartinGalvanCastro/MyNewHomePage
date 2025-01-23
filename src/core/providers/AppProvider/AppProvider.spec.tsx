import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AppProvider from "./AppProvider";

describe("AppProvider", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <AppProvider>
        <div>Test Child</div>
      </AppProvider>
    );
    expect(getByText("Test Child")).toBeInTheDocument();
  });
});
