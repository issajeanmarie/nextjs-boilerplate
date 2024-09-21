import { IAPIResponse } from "@/lib/types/integration";
import { baseAPI } from "../base-api";

/**
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 */

export const customersMutations = baseAPI.injectEndpoints({
	endpoints: (builder) => ({
		addCustomer: builder.mutation<IAPIResponse<void>, void>({
			invalidatesTags: [],
			query: (DTO) => ({
				url: "customers",
				method: "POST",
				body: DTO,
			}),
		}),
	}),
});

export const {} = customersMutations;
