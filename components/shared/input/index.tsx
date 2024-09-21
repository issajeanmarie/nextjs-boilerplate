import { INormalInputProps } from "@/lib/types/components/shared"
import { CSSProperties, FC } from "react"
import GDatePicker from "./date"
import { GPasswordInput } from "./password"
import GSelectInput from "./select"
import GTextInput from "./text"
import GTextAreaInput from "./textArea"
import GInputWrapper from "./wrapper"

/**
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

export const GInput: FC<INormalInputProps> = ({ ...rest }): JSX.Element => {
    const { attachedSide, sharp, passwordInput, type, options } = rest

    const { name, iconPosition = "start" } = rest

    const globalInputStyles: CSSProperties = {
        borderTopLeftRadius: attachedSide === "left" ? "0px" : undefined,
        borderBottomLeftRadius: attachedSide === "left" ? "0px" : undefined,
        borderTopRightRadius: attachedSide === "right" ? "0px" : undefined,
        borderBottomRightRadius: attachedSide === "right" ? "0px" : undefined,
        borderLeft: attachedSide === "left" ? "0px" : undefined,
        borderRight: attachedSide === "right" ? "0px" : undefined,
        borderRadius: sharp ? "0px" : undefined,
    }

    const iconAndTextSpace = iconPosition === "start" ? `mr-3` : `ml-3`

    if (passwordInput) {
        return (
            <GInputWrapper name={name} {...rest}>
                <GPasswordInput
                    style={globalInputStyles}
                    iconAndTextSpace={iconAndTextSpace}
                    {...rest}
                />
            </GInputWrapper>
        )
    }

    switch (type) {
        case "date":
            return (
                <GInputWrapper name={name} {...rest}>
                    <GDatePicker
                        style={globalInputStyles}
                        placeholder={rest.placeholder}
                        name={name}
                    />
                </GInputWrapper>
            )
            break
        case "select":
            return (
                <GInputWrapper name={name} {...rest}>
                    <GSelectInput
                        style={globalInputStyles}
                        iconAndTextSpace={iconAndTextSpace}
                        options={options}
                        {...rest}
                    />
                </GInputWrapper>
            )
            break
        case "textArea":
            return (
                <GInputWrapper name={name} {...rest}>
                    <GTextAreaInput
                        name={name}
                        placeholder={rest.placeholder}
                        className={rest.className}
                    />
                </GInputWrapper>
            )
            break

        default:
            return (
                <GInputWrapper name={name} {...rest}>
                    <GTextInput
                        style={globalInputStyles}
                        iconAndTextSpace={iconAndTextSpace}
                        {...rest}
                    />
                </GInputWrapper>
            )
            break
    }
}
