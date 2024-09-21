import { DatePicker, DatePickerProps } from "antd"
import { FC } from "react"
import GImage from "../image"

interface IProps extends DatePickerProps {}

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GDatePicker: FC<IProps> = ({ ...rest }): JSX.Element => {
    const {
        placeholder = "Select date",
        allowClear = true,
        disabledDate,
    } = rest

    return (
        <DatePicker
            placeholder={placeholder}
            suffixIcon={<GImage iconSrc="calendar" width={16} />}
            allowClear={allowClear}
            disabledDate={disabledDate}
            format="YYYY/MM/DD"
            className="w-full"
            {...rest}
        />
    )
}

export default GDatePicker
