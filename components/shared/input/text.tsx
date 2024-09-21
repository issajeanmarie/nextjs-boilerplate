import { INormalInputProps } from "@/lib/types/components/shared"
import { Input } from "antd"
import { FC } from "react"
import GIconImporter from "../icons"
import GImage from "../image"

interface IProps extends INormalInputProps {
    iconAndTextSpace?: string
}

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GTextInput: FC<IProps> = ({ ...rest }): JSX.Element => {
    const {
        iconSrc,
        iconHeight = 16,
        iconWidth = 16,
        iconPosition = "start",
        style,
        iconAndTextSpace,
        htmlType,
    } = rest
    const formattedIconSrc = iconSrc ? GIconImporter()[iconSrc] : undefined

    return (
        <Input
            style={style}
            prefix={
                formattedIconSrc &&
                (iconPosition === "start" || !iconPosition) ? (
                    <GImage
                        src={formattedIconSrc}
                        width={iconWidth}
                        height={iconHeight}
                        className={iconAndTextSpace}
                    />
                ) : undefined
            }
            suffix={
                formattedIconSrc && iconPosition === "end" ? (
                    <GImage
                        src={formattedIconSrc}
                        width={iconWidth}
                        height={iconHeight}
                        className={iconAndTextSpace}
                    />
                ) : undefined
            }
            type={htmlType}
            {...rest}
        />
    )
}

export default GTextInput
