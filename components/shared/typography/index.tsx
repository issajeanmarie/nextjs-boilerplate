import { COLOR_CONFIG } from "@/config/styles/tailwind-theme";
import { ITypographyProps } from "@/lib/types/components/typography";
import { FC } from "react";

/**
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GText: FC<ITypographyProps> = ({
	dimension,
	children,
	className,
	style,
	color,
	weight,
	center,
	...rest
}): JSX.Element => {
	const level = (function () {
		switch (dimension) {
			case "extra-large":
				return "text-[32px] font-[600] leading-10";
				break;
			case "large":
				return "text-[24px] leading-[30px]";
				break;
			case "semi-large":
				return "text-[18px] leading-[22.5px]";
				break;
			case "heading":
				return "text-[16px] font-[500]";
				break;
			case "medium":
				return "text-[14px]";
				break;
			case "caption":
				return "text-[12px]";
				break;
			case "tiny":
				return "text-[10px]";
				break;
			default:
				return "text-[14px]";
				break;
		}
	})();

	const fontWeight = (function () {
		switch (weight) {
			case "normal":
				return "font-[300]";
				break;
			case "solid":
				return "font-[400]";
				break;
			case "medium":
				return "font-[500]";
				break;
			case "semibold":
				return "font-semibold";
				break;
			case "bold":
				return "font-bold";
				break;
			default:
				return "font-[300]";
				break;
		}
	})();

	return (
		<h1
			className={`${level} ${fontWeight} ${className} ${center ? "text-center" : ""}`}
			style={{
				color: color
					? COLOR_CONFIG[color]
					: COLOR_CONFIG["project-name-dark-gray"],
				...style,
			}}
			{...rest}
		>
			{children}
		</h1>
	);
};

export default GText;
