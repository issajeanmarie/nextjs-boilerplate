import { LOGGED_IN_USER } from "@/config"
import { routes } from "@/config/routes"
import { handleRemoveLoggedInUser } from "./cookies"

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 * @returns {void}
 */

export const handleLogout = (): void => {
    localStorage?.removeItem(LOGGED_IN_USER)
    handleRemoveLoggedInUser()
    document.cookie = `${LOGGED_IN_USER}=;path=/;`
    window.location.href = routes.login.url
}
