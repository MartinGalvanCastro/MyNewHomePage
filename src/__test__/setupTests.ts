import "@testing-library/jest-dom";
import {
  usePathnameMock,
  useSearchParamsMock,
  useRouterMock,
} from "./__fixtures__/navigationFixtures";

beforeAll(() => {
  vi.mock("next/navigation", async (importOriginal) => {
    const actual = await importOriginal<typeof import("next/navigation")>();
    const { useRouter } = await vi.importActual<typeof import("next-router-mock")>(
      "next-router-mock"
    );
    const usePathname = usePathnameMock;
    const useSearchParams = useSearchParamsMock;
    return {
      ...actual,
      useRouter: useRouterMock.mockImplementation(useRouter),
      usePathname,
      useSearchParams,
      __esModule: true,
    };
  });
});
