import { Locale } from "@/i18n.config"
import { PageData } from "../types/page-data"

/**
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

type Dictionary = {
    [_key in Locale]: () => Promise<PageData>
}

const dictionaries: Dictionary = {
    en: () => import("../../locales/en.json").then(module => module.default),
    rw: () => import("../../locales/rw.json").then(module => module.default),
    fr: () => import("../../locales/fr.json").then(module => module.default),
}

export const getDictionary = async (locale: Locale): Promise<PageData> =>
    dictionaries[locale]()
