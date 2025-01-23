import { render, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "./themeToggle";
import sinon, { SinonSandbox, SinonStub } from "sinon";

const TEST_ID = "theme-toggle";

describe("ThemeToggle with Sinon Sandbox in TypeScript", () => {
  let sandbox: SinonSandbox;
  let getItemStub: SinonStub;
  let setItemStub: SinonStub;
  let setAttributeStub: SinonStub;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    getItemStub = sandbox.stub(localStorage, "getItem");
    setItemStub = sandbox.stub(localStorage, "setItem");
    setAttributeStub = sandbox.stub(document.documentElement, "setAttribute");
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render with the correct initial theme", () => {
    getItemStub.withArgs("theme").returns("nord");
    const { getByTestId } = render(<ThemeToggle testId={TEST_ID} />);
    const toggle = getByTestId(TEST_ID) as HTMLInputElement;
    expect(toggle.checked).toBe(false);
  });

  it.skip("should toggle theme on click", () => {
    getItemStub.withArgs("theme").returns("nord");
    const { getByTestId } = render(<ThemeToggle testId={TEST_ID} />);
    const toggle = getByTestId(TEST_ID) as HTMLInputElement;

    fireEvent.click(toggle);
    expect(setItemStub.calledWith("theme", "night")).toBe(true);
    expect(setAttributeStub.calledWith("data-theme", "night")).toBe(true);

    fireEvent.click(toggle);
    expect(setItemStub.calledWith("theme", "nord")).toBe(true);
    expect(setAttributeStub.calledWith("data-theme", "nord")).toBe(true);
  });
});
