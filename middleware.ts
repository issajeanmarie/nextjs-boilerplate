import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";
import { i18n, Locale } from "./i18n.config";

const headers = { "accept-language": "en-US,en;q=0.5" };
const languages = new Negotiator({ headers }).languages();
const locales = i18n.locales;
const defaultLocale = i18n.defaultLocale;

match(languages, locales, defaultLocale);

/**
 * @param request - The NextRequest object representing the incoming request.
 * @returns The locale extracted from the "Accept-Language" header or the default locale.
 * @description Retrieves the locale from the request's "Accept-Language" header.
 * If the header is not present or empty, the default locale is returned.
 */
export function getLocale(request: NextRequest): Locale {
	const acceptLanguageHeader = request.headers.get("Accept-Language");

	if (acceptLanguageHeader?.length) {
		return (acceptLanguageHeader?.split("-")[0] as Locale) ?? defaultLocale;
	}

	return defaultLocale;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) return;

	const userLocale = getLocale(request);
	const isUserLocaleSupported = locales.includes(userLocale);

	request.nextUrl.pathname = `/${
		isUserLocaleSupported ? userLocale : defaultLocale
	}${pathname}`;

	return Response.redirect(request.nextUrl);
}

export const config = {
	matcher: ["/((?!_next).*)"],
};
