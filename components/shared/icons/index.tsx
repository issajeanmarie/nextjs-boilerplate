import { TICON_OPTIONS } from "@/config/extended-enums";
import DateIcon from "../../../public/assets/icons/calendar.svg";
import DroppdownIcon from "../../../public/assets/icons/dropdown.svg";
import ErrorIcon from "../../../public/assets/icons/error.svg";
import NotFoundIcon from "../../../public/assets/icons/not-found.svg";
import NothingIcon from "../../../public/assets/icons/nothing.svg";
import PasswordIcon from "../../../public/assets/icons/password.svg";
import RefreshPrimaryIcon from "../../../public/assets/icons/refresh-primary.svg";
import TickSuccessIcon from "../../../public/assets/icons/tick-success.svg";
import WarningIcon from "../../../public/assets/icons/warning.svg";


/**
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GIconImporter = (): {
	[_key in TICON_OPTIONS]: string;
} => {
	return {
		warning: WarningIcon as string,
		tickSuccess: TickSuccessIcon as string,
		nothing: NothingIcon as string,
		refreshPrimary: RefreshPrimaryIcon as string,
		error: ErrorIcon as string,
		notFound: NotFoundIcon as string,
		dropdown: DroppdownIcon as string,
		calendar: DateIcon as string,
		password: PasswordIcon as string,
		expand: DroppdownIcon as string,
	};
};

export default GIconImporter;
