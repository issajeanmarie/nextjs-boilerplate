import { TICON_OPTIONS } from "@/config/extended-enums";
import { FC } from "react";
import GButton from "../button";
import GContainer from "../container";
import GImage from "../image";
import GText from "../typography";

interface IProps {
	title: string;
	description: string;
	iconSrc?: TICON_OPTIONS;
	onClick?: () => void;
	href?: string;
}

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GCommonErrorPage: FC<IProps> = ({
	title,
	iconSrc = "error",
	description,
	onClick,
	href,
}): JSX.Element => {
	return (
		<GContainer className="h-screen w-screen bg-project-name-dark-white grid place-items-center">
			<GContainer className="flex items-center gap-6">
				<GImage iconSrc={iconSrc} className="w-[100px]" />
				<GContainer className="w-[350px]">
					<GText dimension="heading" className="text-[32px]">
						{title}
					</GText>
					<GText>{description}</GText>

					{(onClick || href) && (
						<GButton
							className="mt-4"
							type="dashed"
							onClick={onClick}
							href={href}
						>
							GO HOME
						</GButton>
					)}
				</GContainer>
			</GContainer>
		</GContainer>
	);
};

export default GCommonErrorPage;
