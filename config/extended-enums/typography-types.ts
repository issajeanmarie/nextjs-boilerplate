export const INPUT_DIMENSIONS = [
    "extra-large",
    "large",
    "semi-large",
    "heading",
    "medium",
    "caption",
    "tiny",
] as const
export type TINPUT_DIMENSIONS = (typeof INPUT_DIMENSIONS)[number]
export const TEXT_WEIGHT = [
    "normal",
    "solid",
    "medium",
    "semibold",
    "bold",
] as const
export type ITEXT_WEIGHT = (typeof TEXT_WEIGHT)[number]
