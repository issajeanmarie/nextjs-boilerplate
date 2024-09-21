import { TICON_OPTIONS } from "@/config/extended-enums";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Tooltip } from "antd";
import { FC } from "react";
import GImage from "../image";

interface IProps {
	iconSrc: TICON_OPTIONS;
	onClick?: () => void;
	iconWidth?: number;
	iconHeight?: number;
	loading?: boolean;
	size?: "small" | "medium";
	tooltipTitle?: string;
	disabled?: boolean;
}

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const ActionButton: FC<IProps> = ({
	iconSrc,
	iconHeight,
	iconWidth,
	onClick,
	loading,
	size = "small",
	tooltipTitle,
	disabled,
}): JSX.Element => {
	const heightAndWidth =
		size === "small" ? "h-[32px] w-[32px]" : "h-[42px] w-[42px]";

	return (
		<Tooltip title={tooltipTitle}>
			<button
				onClick={(e) => {
					if (onClick) {
						e.stopPropagation();
						onClick();
					}
				}}
				className={`${heightAndWidth} ${disabled ? "bg-project-name-white" : ""} flex items-center justify-center border rounded cursor-pointer ${!disabled ? "hover:bg-gray-50" : ""} flex-shrink-0`}
				disabled={disabled}
			>
				{loading ? (
					<Spin indicator={<LoadingOutlined spin />} size="small" />
				) : (
					<GImage
						iconSrc={iconSrc}
						width={iconWidth}
						height={iconHeight}
						pointer
					/>
				)}
			</button>
		</Tooltip>
	);
};

export default ActionButton;
