import { renderWithAppProviders } from "@/__test__/utils";
import { describe, it, expect } from "vitest";
import { Navbar } from "./navbar";

describe("Navbar", () => {
  it("should render Navbar with buttons and dropdowns", () => {
    const { getByTestId } = renderWithAppProviders(<Navbar testId="navbar" />);

    expect(getByTestId("navbar")).toBeInTheDocument();
    expect(getByTestId("navbar.dropdown.about")).toBeInTheDocument();
    expect(getByTestId("navbar.dropdown.experience")).toBeInTheDocument();
    expect(getByTestId("navbar.dropdown.projects")).toBeInTheDocument();
    expect(getByTestId("navbar.dropdown.CV")).toBeInTheDocument();
    expect(getByTestId("navbar.center.about")).toBeInTheDocument();
    expect(getByTestId("navbar.center.experience")).toBeInTheDocument();
    expect(getByTestId("navbar.center.projects")).toBeInTheDocument();
    expect(getByTestId("navbar.center.CV")).toBeInTheDocument();
    expect(getByTestId("navbar.themeToggle")).toBeInTheDocument();
    expect(getByTestId("navbar.i18nDropdown")).toBeInTheDocument();
  });
});
