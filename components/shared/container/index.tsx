import {
    CSSProperties,
    DetailedHTMLProps,
    FC,
    HTMLAttributes,
    ReactNode,
} from "react"

interface IProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode
    className?: string
    style?: CSSProperties
}
/**
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GContainer: FC<IProps> = ({
    children,
    className,
    style,
    ...rest
}): JSX.Element => {
    return (
        <div className={className} style={style} {...rest}>
            {children}
        </div>
    )
}

export default GContainer
