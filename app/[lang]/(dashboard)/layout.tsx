import GContainer from "@/components/shared/container";
import { ReactNode } from "react";

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const DashboardLayout = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	return <GContainer>{children}</GContainer>;
};

export default DashboardLayout;
