import { TREGISTERED_FROM_OPTIONS } from "./extended-enums"

export const DEFAULT_LAST_VISITED_PAGE_VAR_NAME = ""
export const JWT_SECRET = ""
export const DEFAULT_PUBLIC_URL = process.env.NEXT_PUBLIC_API_HOST
export const DEFAULT_CACHE_TIME = 60
export const LOGGED_IN_USER = "_logged_in_user_"
export const REFRESH_TOKEN = "_refresh_token_"
export const FORM_NAMES = {
    login: "login",
    signup: "signup",
    resetPassword: "reset-password",
    requestResetPasswordCode: "request-reset-password-code",
    accountManualVerify: "account-manual-verify",
    completeProfile: "complete-profile",
    createOffer: "create-offer",
    updateProductEntry: "update-product-entry",
}

export const REGISTERED_FROM_VAR = "_registered_from_"

export const REGISTERED_FROM: {
    [_key in TREGISTERED_FROM_OPTIONS]: TREGISTERED_FROM_OPTIONS
} = {
    login_or_signup: "login_or_signup",
    start_selling: "start_selling",
}

export const DATE_FORMAT = {
    hourDateFormat: "YYYY-MM-DDTHH:mm:ss a",
    amPmclock: "h:mm A",
    clock: "HH:mm",
    yearDateFormat: "YYYY-MM-DD",
    dateYearFormat: "DD-MM-YYYY",
    toShortDate: "MMM DD, YYYY",
    toShortYearDate: "MMM DD, YY",
}
export const INTERNAL_SERVER_ERRORS = [500, 502, 503, 504, 521, 522, 524]
