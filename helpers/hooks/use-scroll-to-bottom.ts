import { useEffect } from "react"

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

export const useScrollToBottom = ({
    dependency,
    elementId,
}: {
    dependency: unknown
    elementId: string
}) => {
    useEffect(() => {
        const el = document.getElementById(elementId)
        if (el) {
            el.scrollTop = el.scrollHeight + 10
        }
    }, [dependency, elementId])
}
