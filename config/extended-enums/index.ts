import { COLOR_CONFIG } from "../styles/tailwind-theme";

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

export const ICON_OPTIONS = [
	"warning",
	"tickSuccess",
	"nothing",
	"refreshPrimary",
	"error",
	"notFound",
	"dropdown",
	"calendar",
	"password",
	"expand",
] as const;
export type TICON_OPTIONS = (typeof ICON_OPTIONS)[number];
export const ICON_POSITIONS = ["start", "end"] as const;
export type TICON_POSITIONS = (typeof ICON_POSITIONS)[number];
export const ATTACHED_SIDES = ["left", "right"] as const;
export type TATTACHED_SIDES = (typeof ATTACHED_SIDES)[number];
export const USER_TYPES = ["CUSTOMER", "ADMIN"] as const;
export type TUSER_TYPES = (typeof USER_TYPES)[number];
export const COLOR_CONFIG_PROPERTY_NAMES = Object.keys(
	COLOR_CONFIG
) as (keyof typeof COLOR_CONFIG)[];

export type TCOLORS = (typeof COLOR_CONFIG_PROPERTY_NAMES)[number];
export const REGISTERED_FROM_OPTIONS = [
	"start_selling",
	"login_or_signup",
] as const;
export type TREGISTERED_FROM_OPTIONS = (typeof REGISTERED_FROM_OPTIONS)[number];
export const INPUT_TYPES = [
	"select",
	"text",
	"number",
	"date",
	"textArea",
] as const;
export type TINPUT_TYPES = (typeof INPUT_TYPES)[number];
export const PRODUCT_STATUSES = ["PUBLISHED", "UNPUBLISHED"] as const;
export type TPRODUCT_STATUSES = (typeof PRODUCT_STATUSES)[number];
export const ORDER_REQUEST_STATUSES = [
	"PENDING",
	"IN_NEGOTIATION",
	"ACCEPTED",
	"REJECTED",
] as const;
export type TORDER_REQUEST_STATUSES = (typeof ORDER_REQUEST_STATUSES)[number];
export const ACTION_MODAL_TYPES = ["danger", "normal"] as const;
export type TACTION_MODAL_TYPES = (typeof ACTION_MODAL_TYPES)[number];
export const DELIVERY_OPTIONS = [
	"SELF_PICKUP",
	"LOCAL_DELIVERY",
	"CIF",
	"FOB",
] as const;
export type TDELIVERY_OPTIONS = (typeof DELIVERY_OPTIONS)[number];
