import { ANTD_THEME } from "@/config/styles/antd-theme"
import { ConfigProvider, MappingAlgorithm } from "antd"
import { ComponentToken } from "antd/es/affix/style"
import { AliasToken } from "antd/es/theme/internal"
import { FC, ReactNode } from "react"

export type TComponentTypesFromAntD =
    | (Partial<ComponentToken> &
          Partial<AliasToken> & {
              algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[]
          })
    | undefined

interface IProps {
    children: ReactNode
    buttonTheme?: TComponentTypesFromAntD
}

/**
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 * @description A component that wraps all global components that extend antd components, allowing Storybook to work.
 */

const GComponent: FC<IProps> = ({ children, buttonTheme }): JSX.Element => {
    return (
        <ConfigProvider
            theme={{
                ...ANTD_THEME,
                components: {
                    ...ANTD_THEME.components,
                    Button: {
                        ...ANTD_THEME.components?.Button,
                        ...buttonTheme,
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export default GComponent
