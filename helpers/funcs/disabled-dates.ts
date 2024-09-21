import { RangePickerProps } from "antd/es/date-picker"
import dayjs from "dayjs"

/**
 * Disable future dates for a range picker.
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 * @param current - The current date being checked.
 * @returns A boolean indicating whether the current date is disabled.
 */

export const disablePastDates: RangePickerProps["disabledDate"] = current => {
    return current && current < dayjs().startOf("day")
}
