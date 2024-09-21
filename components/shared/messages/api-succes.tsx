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

const GAPISuccessMessage: FC<IProps> = ({ message }): JSX.Element => {
	return (
		<GContainer className="bg-project-name-green-faded border p-2 rounded animated-message mb-4 flex items-start gap-2">
			<GImage iconSrc="tickSuccess" width={16} className="mt-1" />
			<GText color="project-name-green" weight="solid" dimension="caption">
				{message ?? "Success!"}
			</GText>
		</GContainer>
	);
};

export default GAPISuccessMessage;
