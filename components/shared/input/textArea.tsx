import { IGInputProps } from "@/lib/types/components/shared"
import TextArea, { TextAreaProps } from "antd/es/input/TextArea"
import { FC } from "react"

interface IProps extends IGInputProps, TextAreaProps {
    iconAndTextSpace?: string
}

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GTextAreaInput: FC<IProps> = ({ ...rest }): JSX.Element => {
    const { style } = rest

    return (
        <TextArea
            style={{ ...style, minHeight: "144px" }}
            className="min-h-[1000px]"
            {...rest}
        />
    )
}

export default GTextAreaInput
