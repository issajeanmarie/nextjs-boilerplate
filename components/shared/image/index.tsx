"use client";
import { TICON_OPTIONS } from "@/config/extended-enums";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";
import { FC } from "react";
import ImageThumbnail from "../../../public/assets/imgs/image-thumbnail.jpg";
import GIconImporter from "../icons";
interface IProps extends Omit<ImageProps, "alt" | "src"> {
	alt?: string;
	iconSrc?: TICON_OPTIONS;
	src?: string | StaticImport;
	pointer?: boolean;
	expand?: boolean;
}

/**
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

const GImage: FC<IProps> = ({
	alt = "",
	width,
	height,
	iconSrc,
	src,
	className,
	pointer,
	expand,
	...rest
}): JSX.Element => {
	const formattedIconSrc = iconSrc ? GIconImporter()[iconSrc] : undefined;

	return (
		<Image
			alt={alt}
			width={width}
			height={height}
			src={(formattedIconSrc ?? src) || ImageThumbnail}
			className={`${pointer ? "cursor-pointer" : ""} ${className}`}
			{...rest}
		/>
	);
};

export default GImage;
