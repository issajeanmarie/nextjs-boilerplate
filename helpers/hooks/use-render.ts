import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Locale } from "../../i18n.config"
import { getDictionary } from "../../lib/dictionaries"
import { PageData } from "../../lib/types/page-data"

/**
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 * @description Custom hook for fetching and managing dictionaries.
 * @returns An object containing the current language and dictionary data.
 */

export const useDictionaries = () => {
    const [dic, setDic] = useState<PageData | null>(null)

    const params = useParams()
    const lang: Locale | null = (params as { lang: Locale })?.lang

    useEffect(() => {
        if (params?.lang) {
            ;(async function () {
                await getDictionary(lang).then((data: PageData) => {
                    setDic(data as PageData)
                })
            })()
        }
    }, [lang, params?.lang])

    return { lang, dic }
}
