import {
	TACTION_MODAL_TYPES,
	TATTACHED_SIDES,
	TCOLORS,
	TICON_OPTIONS,
	TICON_POSITIONS,
	TINPUT_TYPES,
} from "@/config/extended-enums";
import {
	TBUTTON_BACKGROUNDS,
	TBUTTON_TRANSFORMS,
} from "@/config/extended-enums/button-types";
import { ButtonProps, InputProps, ModalProps, SelectProps } from "antd";
import { DefaultOptionType } from "antd/es/cascader";
import { Dispatch, SetStateAction } from "react";

export interface IClickable {
	color?: TCOLORS;
	/**
	 * Type of icon to display on the Clickable
	 */
	iconSrc?: TICON_OPTIONS;
	/**
	 * Text to display
	 */
	text?: string;
	/**
	 * Display text of the Clickable as bold text
	 *
	 * This changes the color of text as well
	 */
	bold?: boolean;
	/**
	 * Add dropdown icon at the end of Clickable
	 */
	dropdown?: boolean;
	/**
	 * Icon height to match UIs, default value is set to 18
	 */
	iconHeihgt?: number;
	/**
	 * Text to display as key count, or CTA
	 */
	suffixText?: string;
	/**
	 * The path or URL to navigate to. It can also be an object.
	 * @example https://project-name.gov.rw/
	 */
	href?: string;
	/**
	 * Display Clickable with border and a background color
	 */
	active?: boolean;
	onClick?: () => void;
	dropdownAfter?: boolean;
	dropdownIconSrc?: TICON_OPTIONS;
	dropdownWith?: number;
	dash?: boolean;
	className?: string;
}

export interface INormalInputProps extends InputProps, IGInputProps {
	type?: TINPUT_TYPES;
	htmlType?: string;
	loading?: boolean;
	label?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	disabledDate?: any;
}

export interface IGInputProps {
	iconSrc?: TICON_OPTIONS;
	iconWidth?: number;
	iconHeight?: number;
	passwordInput?: boolean;
	iconPosition?: TICON_POSITIONS;
	errMessage?: string;
	phoneNumberValidation?: boolean;
	noMb?: boolean;
	full?: boolean;
	isEmail?: boolean;
	required?: boolean;
	/**
	 * Space between icon and the text
	 */
	spacing?: number;
	/**
	 * Creates a input without any border radius.
	 */
	sharp?: boolean;
	/**
	 * Creates a input with border radius on one side.
	 */
	attachedSide?: TATTACHED_SIDES;
	options?: DefaultOptionType[];
	inputMinLen?: number;
}

export interface IPasswordProps extends INormalInputProps {
	hasPrefix?: boolean;
	iconAndTextSpace: string;
}

export interface IGButtonProps extends ButtonProps {
	iconSrc?: TICON_OPTIONS;
	bg?: TBUTTON_BACKGROUNDS;
	textTransform?: TBUTTON_TRANSFORMS;
	full?: boolean;
	/**
	 * Creates a button without any border radius
	 */
	sharp?: boolean;
	/**
	 * Creates a button with border radius on one side.
	 */
	attachedSide?: TATTACHED_SIDES;
}

export type TSelectProps = IPasswordProps & SelectProps;
export type IFormSectionRows = INormalInputProps[][];
export interface IModalCommonProps extends ModalProps {
	setOpen: Dispatch<SetStateAction<boolean>>;
	itemName?: string;
	loading: boolean;
	type?: TACTION_MODAL_TYPES;
	description?: string;
	actionLabel?: string;
	closeLabel?: string;
}

export const RedirectSources = [
	"resetPassword",
	"home",
	"signupSuccess",
	"verifyAccount",
	"verifyAccountFailure",
] as const;
export type ERedirectSources = (typeof RedirectSources)[number];
