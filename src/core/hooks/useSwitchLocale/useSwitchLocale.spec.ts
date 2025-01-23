import { renderHook, act } from "@testing-library/react";
import { usePathnameMock, useSearchParamsMock, useRouterMock } from "@/__test__/__fixtures__";
import { useSwitchLocale } from "./useSwitchLocale";
import { MockedFunction } from "vitest";

describe("useSwitchLocale", () => {
  let replaceMock: MockedFunction<any>;

  beforeEach(() => {
    replaceMock = vi.fn();
    usePathnameMock.mockReturnValue("/en/some-path");
    useSearchParamsMock.mockReturnValue(new URLSearchParams());
    useRouterMock.mockReturnValue({ replace: replaceMock });
  });

  afterEach(() => {
    usePathnameMock.mockReset();
    useSearchParamsMock.mockReset();
    replaceMock.mockReset();
  });

  it("should switch the locale in the pathname", () => {
    const { result } = renderHook(() => useSwitchLocale());
    act(() => {
      result.current.switchLocale("es");
    });
    expect(replaceMock).toHaveBeenCalledWith("/es/some-path");
  });

  it("should preserve query parameters when switching locale", () => {
    useSearchParamsMock.mockReturnValue(new URLSearchParams("foo=bar"));
    const { result } = renderHook(() => useSwitchLocale());
    act(() => {
      result.current.switchLocale("es");
    });
    expect(replaceMock).toHaveBeenCalledWith("/es/some-path?foo=bar");
  });

  it("should handle pathnames with subdirectories", () => {
    usePathnameMock.mockReturnValue("/en/subdir/some-path");
    const { result } = renderHook(() => useSwitchLocale());
    act(() => {
      result.current.switchLocale("es");
    });
    expect(replaceMock).toHaveBeenCalledWith("/es/subdir/some-path");
  });

  it("should handle empty pathnames", () => {
    usePathnameMock.mockReturnValue("/");
    const { result } = renderHook(() => useSwitchLocale());
    act(() => {
      result.current.switchLocale("es");
    });
    expect(replaceMock).toHaveBeenCalledWith("/es/");
  });

  it("should handle undefined pathnames", () => {
    usePathnameMock.mockReturnValue(undefined);
    const { result } = renderHook(() => useSwitchLocale());
    act(() => {
      result.current.switchLocale("es");
    });
    expect(replaceMock).toHaveBeenCalledWith("/es");
  });
});
