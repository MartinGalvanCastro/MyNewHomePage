import { CommonProps } from "@/core/types/commonProps";
import { NavbarButton } from "./NavbarButton";
import { I18nDropdown } from "@/core/components/i18nDropdown/i18nDropdown";
import { ThemeToggle } from "@/core/components/ThemeToggle/ThemeToggle";

export interface NavbarProps extends CommonProps {}

export const Navbar: React.FC<NavbarProps> = ({ testId }) => {
  return (
    <div className="navbar bg-base-200 shadow-md" data-testid={testId}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavbarButton id="about" onClick={() => {}} testId={`${testId}.dropdown.about`} />
            <NavbarButton
              id="experience"
              onClick={() => {}}
              testId={`${testId}.dropdown.experience`}
            />
            <NavbarButton id="projects" onClick={() => {}} testId={`${testId}.dropdown.projects`} />
            <NavbarButton id="CV" onClick={() => {}} testId={`${testId}.dropdown.CV`} />
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" data-testid={`${testId}.brand`} href="/">
          Martin Galvan
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavbarButton id="about" onClick={() => {}} testId={`${testId}.center.about`} />
          <NavbarButton id="experience" onClick={() => {}} testId={`${testId}.center.experience`} />
          <NavbarButton id="projects" onClick={() => {}} testId={`${testId}.center.projects`} />
          <NavbarButton id="CV" onClick={() => {}} testId={`${testId}.center.CV`} />
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center space-x-4">
          <ThemeToggle testId={`${testId}.themeToggle`} />
          <I18nDropdown testId={`${testId}.i18nDropdown`} />
        </div>
      </div>
    </div>
  );
};
