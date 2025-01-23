import { SupportedLocale } from "@/core/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";

interface UseSwitchLocaleHookResponse {
  switchLocale: (locale: SupportedLocale) => void;
}

export const useSwitchLocale = (): UseSwitchLocaleHookResponse => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  return useMemo(
    () => ({
      switchLocale: (locale: SupportedLocale) => {
        console.log("Switching locale to:", locale);
        if (!pathname) {
          router.replace(`/${locale}`);
          return;
        }
        // Replace the first segment with the new locale
        const pathSegments = pathname.split("/").filter(Boolean);
        const newPath = `/${locale}/${pathSegments.slice(1).join("/")}`; // Always replace the first segment

        // Preserve query parameters
        const queryString = searchParams.toString();
        const newUrl = queryString ? `${newPath}?${queryString}` : newPath;

        // Redirect to the new URL
        router.replace(newUrl);
      },
    }),
    [pathname, searchParams, router]
  );
};
