import GContainer from "../container";
import GText from "../typography";

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

export const GBuyerComingSoon = (): JSX.Element => {
	return (
		<GContainer className="grid place-items-center w-full h-[calc(100vh-400px)]">
			<GContainer className="text-center w-[250px] flex flex-col gap-2">
				<GText color="project-name-dark-gray" dimension="heading" weight="bold">
					COMING SOON
				</GText>

				<GText color="project-name-dark-gray">
					Exciting news! This page is coming soon. Stay tuned for updates!
				</GText>
			</GContainer>
		</GContainer>
	);
};
