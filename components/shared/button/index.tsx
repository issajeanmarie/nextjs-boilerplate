import { COLOR_CONFIG } from "@/config/styles/tailwind-theme";
import { IGButtonProps } from "@/lib/types/components/shared";
import { Button } from "antd";
import { FC } from "react";
import GComponent from "..";
import GIconImporter from "../icons";
import GImage from "../image";

/**
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 * @description Returns a button that extends Ant Design button
 */

const GButton: FC<IGButtonProps> = ({
	children,
	style,
	iconPosition,
	iconSrc,
	textTransform = "uppercase",
	bg,
	full,
	size,
	sharp,
	type = "primary",
	attachedSide,
	...rest
}): JSX.Element => {
	const formattedIconSrc = iconSrc ? GIconImporter()[iconSrc] : undefined;

	const bgColor = (function () {
		switch (bg) {
			case "primary-faded":
				return COLOR_CONFIG["project-name-primary-faded"];
				break;

			case "white":
				return COLOR_CONFIG["project-name-white"];
				break;
			default:
				return "";
				break;
		}
	})();

	const color = (function () {
		switch (bg) {
			case "primary-faded":
				return COLOR_CONFIG["project-name-yellow"];
				break;

			case "gray":
				return COLOR_CONFIG["project-name-gray"];
				break;
			default:
				return "";
				break;
		}
	})();

	return (
		<GComponent buttonTheme={{ borderRadius: sharp ? 0 : 3 }}>
			<Button
				className={`${full ? "w-full" : ""}`}
				style={{
					...style,
					boxShadow: "none",
					textTransform: textTransform,
					background: bgColor,
					color: color,
					padding: size === "small" ? "0px 26px" : "",
					borderTopLeftRadius: attachedSide === "left" ? "0px" : undefined,
					borderBottomLeftRadius: attachedSide === "left" ? "0px" : undefined,
					borderTopRightRadius: attachedSide === "right" ? "0px" : undefined,
					borderBottomRightRadius: attachedSide === "right" ? "0px" : undefined,
				}}
				size={size}
				icon={formattedIconSrc ? <GImage src={formattedIconSrc} /> : undefined}
				iconPosition={iconPosition}
				type={type}
				{...rest}
			>
				{children}
			</Button>
		</GComponent>
	);
};

export default GButton;
