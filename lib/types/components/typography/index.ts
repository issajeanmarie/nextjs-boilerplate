import { TCOLORS } from "@/config/extended-enums"
import {
    ITEXT_WEIGHT,
    TINPUT_DIMENSIONS,
} from "@/config/extended-enums/typography-types"
import { TitleProps } from "antd/es/typography/Title"

export interface ITypographyProps extends TitleProps {
    dimension?: TINPUT_DIMENSIONS
    color?: TCOLORS
    weight?: ITEXT_WEIGHT
    center?: boolean
}
