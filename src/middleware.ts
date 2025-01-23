import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SupportedLocale } from "./core/types/i18n";
import { SUPPORTED_LOCALES } from "@/core/constants";

const PUBLIC_FILE = /\.(.*)$/;

function getLocale(req: NextRequest): string {
  const pathname = req.nextUrl.pathname;
  const segments = pathname.split("/");
  const locale = segments[1];
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale) ? locale : "en";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignorar archivos públicos y rutas de API
  if (PUBLIC_FILE.test(pathname) || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const locale = getLocale(req);

  // Evitar la duplicación del locale en la URL
  if (SUPPORTED_LOCALES.includes(locale as SupportedLocale) && pathname.startsWith(`/${locale}`)) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  console.log(`Rewriting to: ${url.pathname}`);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
