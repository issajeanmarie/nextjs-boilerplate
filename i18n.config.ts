export const i18n = {
    defaultLocale: "en",
    locales: ["en", "rw", "fr"],
} as const

export type Locale = (typeof i18n)["locales"][number]
export const defaultLocale = i18n.defaultLocale
