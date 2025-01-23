import { renderHook } from "@testing-library/react";
import { usePathnameMock } from "@/__test__/__fixtures__";
import { useGetLocale } from "./useGetLocale";

describe("useGetLocale", () => {
  it("should return the locale from the pathname", () => {
    usePathnameMock.mockReturnValue("/en/some-path");
    const { result } = renderHook(() => useGetLocale());
    expect(result.current.locale).toBe("en");
  });

  it("should return the locale from the pathname with different locale", () => {
    usePathnameMock.mockReturnValue("/es/otro-camino");
    const { result } = renderHook(() => useGetLocale());
    expect(result.current.locale).toBe("es");
  });

  it("should return the locale from the pathname with a subdirectory", () => {
    usePathnameMock.mockReturnValue("/en/subdir/some-path");
    const { result } = renderHook(() => useGetLocale());
    expect(result.current.locale).toBe("en");
  });

  it("should return 'en' if the pathname does not have a valid locale", () => {
    usePathnameMock.mockReturnValue("/invalid-locale/some-path");
    const { result } = renderHook(() => useGetLocale());
    expect(result.current.locale).toBe("en");
  });

  it("should return 'en' if the pathname is empty", () => {
    usePathnameMock.mockReturnValue("/");
    const { result } = renderHook(() => useGetLocale());
    expect(result.current.locale).toBe("en");
  });

  it("should return 'en' if the pathname is undefined", () => {
    usePathnameMock.mockReturnValue(undefined);
    const { result } = renderHook(() => useGetLocale());
    expect(result.current.locale).toBe("en");
  });
});
