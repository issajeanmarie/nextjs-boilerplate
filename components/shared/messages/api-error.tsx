import { COLOR_CONFIG } from "@/config/styles/tailwind-theme";
import { FC } from "react";
import GContainer from "../container";
import GImage from "../image";
import GText from "../typography";

interface IProps {
	message?: string;
}

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GAPIErrorMessage: FC<IProps> = ({ message = "Error!" }): JSX.Element => {
	return (
		<GContainer className="bg-project-name-red-faded p-2 rounded animated-message mb-4 flex items-start gap-2">
			<GImage iconSrc="warning" width={16} className="mt-1" />
			<GText
				style={{ color: COLOR_CONFIG["project-name-red"] }}
				weight="normal"
			>
				{message}
			</GText>
		</GContainer>
	);
};

export default GAPIErrorMessage;
