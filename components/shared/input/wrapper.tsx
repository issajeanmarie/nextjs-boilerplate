import { phoneNumberValidator, requiredInput } from "@/helpers/funcs/validation"
import { INormalInputProps } from "@/lib/types/components/shared"
import FormItem from "antd/es/form/FormItem"
import { FC, ReactNode } from "react"
import GComponent from ".."

interface IProps extends INormalInputProps {
    children: ReactNode
}

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GInputWrapper: FC<IProps> = ({ ...rest }): JSX.Element => {
    const {
        noMb,
        full,
        required = true,
        phoneNumberValidation,
        errMessage,
        name,
        isEmail,
        inputMinLen,
        children,
    } = rest

    const rules = (function () {
        if (!required) {
            return undefined
        } else if (phoneNumberValidation) {
            return [
                {
                    required: true,
                    validator: phoneNumberValidator,
                },
            ]
        }

        return requiredInput({
            name,
            message: errMessage,
            isEmail,
            minLen: inputMinLen,
        })
    })()

    return (
        <GComponent>
            <FormItem
                style={{
                    marginBottom: noMb ? "0px" : undefined,
                    width: full ? "100%" : undefined,
                }}
                name={name}
                rules={rules}
            >
                {children}
            </FormItem>
        </GComponent>
    )
}

export default GInputWrapper
