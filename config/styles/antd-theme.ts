import { ThemeConfig } from "antd"

/**
 * @since June 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 * @returns {}
 */

export const ANTD_THEME: ThemeConfig = {
    token: {
        colorPrimary: "#FFB229",
        colorInfo: "#FFB229",
        colorError: "#bd062d",
        colorWarning: "#ed7818",
        colorSuccess: "#cddf00",
    },
    components: {
        Button: {
            borderRadius: 3,
            contentFontSize: 14,
            contentFontSizeSM: 12,
            primaryColor: "rgb(53, 71, 83)",
            fontWeight: 500,
            controlHeight: 42,
            controlHeightSM: 32,
            paddingContentHorizontal: 18,
            borderColorDisabled: "rgba(217, 217, 217, 0)",
            colorBgContainerDisabled: "rgba(227, 178, 33, 0.71)",
            colorTextDisabled: "rgba(0, 0, 0, 0.26)",
            defaultBg: "rgb(241, 247, 251)",
            defaultColor: "rgb(121, 138, 151)",
            defaultHoverBorderColor: "rgb(220, 132, 0)",
            defaultHoverColor: "rgb(255, 255, 255)",
            defaultHoverBg: "rgb(220, 132, 0)",
            defaultBorderColor: "rgb(241, 247, 251)",
            defaultGhostColor: "rgb(241,247,251)",
            defaultGhostBorderColor: "rgb(14,99,140)",
            ghostBg: "rgb(14,99,140)",
        },
        Input: {
            controlHeight: 42,
            borderRadius: 4,
            colorBorder: "rgb(222, 231, 238)",
            colorBgContainer: "rgb(241, 247, 251)",
            colorText: "rgb(53, 71, 83)",
            fontSizeIcon: 32,
            colorTextPlaceholder: "rgb(53,71,83,0.56)",
        },
        Select: {
            controlHeight: 42,
            borderRadius: 4,
            colorBorder: "rgb(222, 231, 238)",
            colorBgContainer: "rgb(241, 247, 251)",
            colorText: "rgb(53, 71, 83)",
            fontSizeIcon: 12,
        },
        Progress: {
            defaultColor: "rgb(227, 178, 33)",
        },
        Typography: {
            fontSizeHeading2: 16,
            fontSizeHeading3: 14,
            fontSizeHeading4: 12,
            fontSizeHeading5: 10,
            colorText: "rgb(53, 71, 83)",
        },
        Layout: {
            siderBg: "rgb(255, 255, 255)",
            headerBg: "rgb(241, 247, 251)",
        },
        Menu: {
            itemSelectedColor: "rgb(11, 65, 91)",
            itemSelectedBg: "rgb(241, 247, 251)",
            itemHoverBg: "rgb(241, 247, 251)",
            itemColor: "rgb(121, 138, 151)",
            itemBorderRadius: 0,
            colorSplit: "rgba(0,0,0,0)",
        },
        Form: {
            itemMarginBottom: 14,
        },
        Table: {
            lineWidth: 6,
            lineHeight: 2.5,
            borderColor: "#DEE7EE",
        },
        DatePicker: {
            controlHeight: 42,
            borderRadius: 4,
            colorBorder: "rgb(222, 231, 238)",
            colorBgContainer: "rgb(241, 247, 251)",
            colorText: "rgb(53, 71, 83)",
            fontSizeIcon: 32,
            colorTextPlaceholder: "rgb(53,71,83,0.56)",
        },
        Checkbox: {
            borderRadiusSM: 4,
            controlInteractiveSize: 22,
            colorWhite: "rgb(0,0,0)",
            lineWidthBold: 1.5,
        },
        Switch: {
            handleBg: "rgb(241,247,251)",
            colorTextQuaternary: "rgb(222,231,238)",
            colorTextTertiary: "rgb(206,218,228)",
            trackHeight: 16,
            handleSize: 12,
            trackMinWidth: 32,
        },
        Notification: {
            colorBgElevated: "rgb(53,71,83)",
            colorBgTextHover: "rgba(247,238,238,0.06)",
            colorError: "rgb(207,89,63)",
            colorText: "rgb(222,231,238)",
            colorTextHeading: "rgb(255,178,41)",
            colorSuccess: "rgb(81,179,73)",
            colorIcon: "rgb(186,199,209)",
        },
        Spin: {
            colorPrimary: "rgb(14,99,140)",
        },
        Modal: {
            padding: 32,
        },
        Upload: {
            colorBorder: "rgb(222,231,238)",
            colorError: "rgb(207,89,63)",
            colorText: "rgb(186,199,209)",
            colorFillAlter: "rgb(241,247,251)",
            borderRadiusLG: 4,
        },
    },
}
