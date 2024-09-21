"use server"
import { LOGGED_IN_USER, REFRESH_TOKEN } from "@/config"
import { ILoginResponse } from "@/lib/types/integration/auth"
import { cookies } from "next/headers"

export const handleSetLoggedInUser = ({
    refreshToken,
    accessToken,
}: ILoginResponse) => {
    localStorage?.setItem(LOGGED_IN_USER, accessToken)
    localStorage?.setItem(REFRESH_TOKEN, refreshToken)
}

export const handleRemoveLoggedInUser = () => {
    cookies().delete(LOGGED_IN_USER)
    cookies().delete(REFRESH_TOKEN)
}

export const handleGetLoggedInUser = () => {
    return cookies().get(LOGGED_IN_USER)?.value
}
