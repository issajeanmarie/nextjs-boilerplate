import { IPasswordProps } from "@/lib/types/components/shared"
import Password from "antd/es/input/Password"
import { FC } from "react"
import GImage from "../image"

/**
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 * @returns {JSX.Element}
 */

export const GPasswordInput: FC<IPasswordProps> = ({
    hasPrefix = true,
    iconAndTextSpace,
    ...rest
}): JSX.Element => {
    return (
        <Password
            prefix={
                hasPrefix ? (
                    <GImage
                        iconSrc="password"
                        width={16}
                        className={iconAndTextSpace}
                    />
                ) : undefined
            }
            {...rest}
        />
    )
}
