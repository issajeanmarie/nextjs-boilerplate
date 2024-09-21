import { LOGGED_IN_USER, REFRESH_TOKEN } from "@/config"
import { ILoginResponse } from "@/lib/types/integration/auth"

export const handleSetUserAuthLocal = ({
    refreshToken,
    accessToken,
}: ILoginResponse) => {
    localStorage?.setItem(LOGGED_IN_USER, accessToken)
    localStorage?.setItem(REFRESH_TOKEN, refreshToken)
}

export const handleRemoveUserAuthLocal = () => {
    localStorage?.removeItem(LOGGED_IN_USER)
    localStorage?.removeItem(REFRESH_TOKEN)
}

export const handleSetToLocal = ({
    name,
    value,
}: {
    name: string
    value: string
}) => {
    localStorage?.setItem(name, value)
}

export const handleRemoveFromLocal = (name: string) => {
    localStorage?.removeItem(name)
}

export const handleGetFromLocal = (name: string) => {
    const item = localStorage?.getItem(name)

    return item ?? ""
}
