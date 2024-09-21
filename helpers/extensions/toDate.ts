import { DATE_FORMAT } from "@/config"
import dayjs from "dayjs"

export {}

declare global {
    interface String {
        toDate(): string
        toDateAndTime(): string
    }
}
String.prototype.toDate = function (): string {
    try {
        const formattedDate = dayjs(this.toString()).format(
            DATE_FORMAT.toShortDate,
        )

        return formattedDate
    } catch (error) {
        return ""
    }
}
String.prototype.toDateAndTime = function (): string {
    try {
        const formattedDate = dayjs(this.toString()).format(
            DATE_FORMAT.toShortDate,
        )

        const formattedTime = dayjs(this.toString()).format(
            DATE_FORMAT.amPmclock,
        )
        return `${formattedDate} - ${formattedTime}`
    } catch (error) {
        return ""
    }
}
