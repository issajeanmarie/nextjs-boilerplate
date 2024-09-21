import { IClickable } from "@/lib/types/components/shared";
import Link from "next/link";
import { FC } from "react";
import GComponent from "..";
import GContainer from "../container";
import GIconImporter from "../icons";
import GImage from "../image";
import GText from "../typography";

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GClickable: FC<IClickable> = ({
	iconSrc,
	text,
	bold,
	dropdown,
	iconHeihgt = 18,
	suffixText,
	href,
	active,
	color,
	dropdownAfter,
	dropdownIconSrc,
	dropdownWith,
	dash = true,
	onClick,
	className,
}): JSX.Element => {
	const formattedIconSrc = iconSrc ? GIconImporter()[iconSrc] : undefined;

	return (
		<GComponent>
			<Link
				className={`${className}`}
				href={href ?? "#"}
				onClick={!href && onClick ? onClick : undefined}
			>
				<GContainer
					className={`${active ? "bg-project-name-white border border-project-name-dark-white" : ""} h-[42px] w-fit px-2 ${color ? "" : "hover:bg-project-name-dark-white hover:border-project-name-dark-white"} flex items-center gap-2 rounded-[4px] cursor-pointer`}
				>
					<GContainer className="flex-shrink-0">
						{formattedIconSrc && (
							<GImage height={iconHeihgt} src={formattedIconSrc} />
						)}
					</GContainer>

					<GContainer className="flex items-center gap-2">
						<GText
							dimension="medium"
							weight={bold ? "medium" : "normal"}
							color={
								color || (bold ? "project-name-dark-gray" : "project-name-gray")
							}
						>
							{text}
						</GText>

						{dropdown && !dropdownAfter && (
							<GImage
								width={dropdownWith}
								src={GIconImporter()[dropdownIconSrc || "dropdown"]}
							/>
						)}

						{suffixText && (
							<>
								{dash && (
									<GText
										dimension="medium"
										weight="normal"
										color={color || "project-name-gray"}
									>
										-
									</GText>
								)}

								<GText
									dimension="medium"
									weight="medium"
									color={color || "project-name-dark-gray"}
								>
									{suffixText}
								</GText>
							</>
						)}

						{dropdown && dropdownAfter && (
							<GImage
								width={dropdownWith}
								src={GIconImporter()[dropdownIconSrc || "dropdown"]}
							/>
						)}
					</GContainer>
				</GContainer>
			</Link>
		</GComponent>
	);
};

export default GClickable;
