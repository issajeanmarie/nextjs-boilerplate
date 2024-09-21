import { DATE_FORMAT } from "@/config"
import dayjs from "dayjs"

export const dateRenderer = (date: Date | string) => {
    if (date) {
        return dayjs(date).locale("en").format(DATE_FORMAT.toShortDate)
    }
    return ""
}
