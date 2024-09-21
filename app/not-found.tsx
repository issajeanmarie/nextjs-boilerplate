import GCommonErrorPage from "@/components/shared/errors/common-error-page";

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const NotFound = (): JSX.Element => {
	return (
		<GCommonErrorPage
			title="404"
			description="It looks like we don't have this page on project-name yet, try going back home!"
			iconSrc="notFound"
			href="/"
		/>
	);
};

export default NotFound;
