import { routes } from "@/config/routes"
import { useRouter } from "next/navigation"
import { handleRemoveLoggedInUser } from "../funcs/cookies"

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

export const useLogOut = () => {
    const router = useRouter()

    const handleLogout = () => {
        handleRemoveLoggedInUser()
        router.push(routes.login.url)
    }

    return { handleLogout }
}
