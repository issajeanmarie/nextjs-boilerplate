export const BUTTON_TYPES = [
    "primary",
    "default",
    "dashed",
    "link",
    "text",
] as const
export type TBUTTON_TYPES = (typeof BUTTON_TYPES)[number]

export const BUTTON_BACKGROUNDS = [
    "primary-faded",
    "danger-faded",
    "white",
    "gray",
] as const
export type TBUTTON_BACKGROUNDS = (typeof BUTTON_BACKGROUNDS)[number]
export const BUTTON_TRANSFORMS = ["uppercase", "lowercase", "none"] as const
export type TBUTTON_TRANSFORMS = (typeof BUTTON_TRANSFORMS)[number]
