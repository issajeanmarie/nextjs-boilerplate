import { FC, ReactNode } from "react"
import GContainer from "../container"
interface IProps {
    children?: ReactNode
    label?: string
}

/**
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GLabel: FC<IProps> = ({ children, label }): JSX.Element => {
    return <GContainer className="bg">{children || label}</GContainer>
}

export default GLabel
