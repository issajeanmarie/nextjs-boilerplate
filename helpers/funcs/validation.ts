import { Rule } from "antd/es/form"
import { jwtDecode } from "jwt-decode"

/**
 * Returns an array of validation rules for a required input field.
 *
 * @param {Object} options - Options for the validation rule
 * @param {string} options.name - The name of the input field
 * @param {string} [options.message] - Custom error message (optional)
 * @param {boolean} [options.isEmail] - Whether the input field is an email field (optional)
 * @param {number} [options.minLen] - Minimum length of the input field (optional)
 * @returns {Rule[]} An array of validation rules
 */

export const requiredInput = ({
    name,
    isEmail,
    minLen,
    message,
}: {
    name?: string
    message?: string
    isEmail?: boolean
    minLen?: number
}): Rule[] => {
    const formattedName = name
        ?.split(" ")
        ?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        ?.join(" ")

    return [
        {
            required: true,
            type: isEmail ? "email" : undefined,
            message: message || `${formattedName} is required!`,
            min: minLen,
        },
    ]
}

export const jwtDecoder = (token: string) => {
    try {
        const decoded = jwtDecode(token) as { roles: string[] }

        return decoded
    } catch (error) {
        return { roles: [] }
    }
}

/**
 * Validates a phone number.
 *
 * @param _ - Unused parameter (required for validation function signature)
 * @param value - The phone number to validate
 * @returns A promise that resolves if the phone number is valid, or rejects with an error message if it's not
 */

export const phoneNumberValidator = (_: unknown, value: string) => {
    const phoneNumberRegex = /^(07\d{8}|2507\d{8}|\+2507\d{8})$/
    if (value && !phoneNumberRegex.test(value)) {
        return Promise.reject(new Error("Ex: (+250) 788 000 000"))
    }
    return Promise.resolve()
}
