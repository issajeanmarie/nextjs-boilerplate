import { TSelectProps } from "@/lib/types/components/shared"
import { LoadingOutlined } from "@ant-design/icons"
import { Select, Spin } from "antd"
import { DefaultOptionType } from "antd/es/select"
import { FC } from "react"
import GImage from "../image"
interface IProps extends TSelectProps {
    options?: DefaultOptionType[]
}

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GSelectInput: FC<IProps> = ({ ...rest }): JSX.Element => {
    const { options, loading, allowClear = true, showSearch = true } = rest
    return (
        <Select
            options={options}
            allowClear={allowClear}
            showSearch={showSearch}
            filterOption={(input, option) => {
                try {
                    return (option?.label as string)
                        ?.toLowerCase()
                        ?.replaceAll(" ", "")
                        .includes(input.toLowerCase()?.replaceAll(" ", ""))
                } catch (e) {
                    return false
                }
            }}
            suffixIcon={
                loading ? (
                    <Spin indicator={<LoadingOutlined spin />} size="small" />
                ) : (
                    <GImage iconSrc="expand" />
                )
            }
            {...rest}
        />
    )
}

export default GSelectInput
