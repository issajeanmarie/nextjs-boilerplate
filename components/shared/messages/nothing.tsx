import { FC } from "react"
import GButton from "../button"
import GContainer from "../container"
import GImage from "../image"
import GText from "../typography"

interface IProps {
    height?: string
    message?: string
    onAction?: () => void
    reload?: boolean
}

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

export const ExporterNothing: FC<IProps> = ({
    height,
    message = "Nothing to show here!",
    onAction,
    reload,
}): JSX.Element => {
    const onClick = () => {
        if (onAction) {
            onAction()
        }
        if (reload) {
            window.location.reload()
        }
    }
    return (
        <GContainer
            className={`${height || "h-full"} w-full flex flex-col items-center justify-center`}
        >
            <GImage iconSrc="nothing" height={64} />
            <GText dimension="caption" className="w-[200px] text-center mb-4">
                {message}
            </GText>
            {(reload || onAction) && (
                <GButton
                    iconSrc="refreshPrimary"
                    bg="primary-faded"
                    onClick={onClick}
                />
            )}
        </GContainer>
    )
}
