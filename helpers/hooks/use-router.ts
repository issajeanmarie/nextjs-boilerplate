"use client";
import {
	useParams,
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";
import { handleRedirectedFrom } from "../funcs/routes";

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

export const useRouterQuery = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const from = searchParams.get("from") ?? "";
	const token = searchParams.get("token") ?? "";
	const sources = handleRedirectedFrom(from);
	const pathname = usePathname();
	const { id } = useParams();

	const redirectTo = ({
		path,
		query,
	}: {
		path: string;
		query?: { [key: string]: string };
	}) => {
		const formattedUrl = query
			? `${path}?${Object.keys(query)
					.map((key) => `${key}=${query[key]}`)
					.join("&")}`
			: path;

		router.push(formattedUrl);
	};

	return {
		redirectdFrom: sources,
		from,
		redirectTo,
		pathname,
		searchParams,
		id: Number(id) || undefined,
		token,
	};
};
