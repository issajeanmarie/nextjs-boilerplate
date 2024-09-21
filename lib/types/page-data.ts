import { Locale } from "@/i18n.config"

export interface PageData {
    title: string
    apiGenericErr: {
        message: string
        description: string
    }
}

export interface InitialPageProps {
    params: {
        lang: Locale
    }
}
