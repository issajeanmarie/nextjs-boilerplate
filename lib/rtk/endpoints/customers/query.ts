import { IAPIResponse } from "@/lib/types/integration";
import { baseAPI } from "../base-api";

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

export const exporterProductQuries = baseAPI.injectEndpoints({
	endpoints: (builder) => ({
		getCustomers: builder.query<IAPIResponse<void>, void>({
			query: () => ({
				url: "customers/all",
			}),
		}),
	}),
});

export const {} = exporterProductQuries;
