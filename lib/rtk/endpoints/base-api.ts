import { routes } from "@/config/routes";
import { handleLogout } from "@/helpers/funcs/logout";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
	BaseQueryApi,
	FetchArgs,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import {
	DEFAULT_CACHE_TIME,
	DEFAULT_PUBLIC_URL,
	INTERNAL_SERVER_ERRORS,
	LOGGED_IN_USER,
} from "../../../config";
import { API_TAG_TYPES } from "../../../config/tag-types";

/**
 * The base query for making API requests.
 *
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 * @remarks
 * This query is configured with a base URL and a function to prepare headers for each request.
 * The `baseUrl` is set to `DEFAULT_PUBLIC_URL` and the `prepareHeaders` function adds an authorization header with a bearer token retrieved from local storage, if available.
 *
 * @returns The base query object.
 */

const baseQuery = fetchBaseQuery({
	baseUrl: DEFAULT_PUBLIC_URL,
	prepareHeaders: (headers) => {
		const token = localStorage?.getItem(LOGGED_IN_USER);
		if (token) headers.set("authorization", `Bearer ${token}`);
		return headers;
	},
});

/**
 * Handles the error returned from a base query.
 * @since August 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 * @param result - The result of the base query.
 * @param api - The base query API.
 * @param extraOptions - Additional options for the base query.
 */

const onbaseQueryError = async (
	result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
	api: BaseQueryApi,
	extraOptions: NonNullable<unknown>
) => {
	if (result?.error) {
		if (result.error.status === 403) {
			handleLogout();
		} else if (INTERNAL_SERVER_ERRORS.includes(result.error.status as number)) {
			const healthResult = await baseQuery(
				process.env.NEXT_PUBLIC_API_HEALTH_ENDPOINT ?? "health-check",
				api,
				extraOptions
			);
			if (healthResult?.error) {
				window.location.href = routes.internalServerError.url;
			}
		}
	}
};

/**
 * @since July 2024
 * @author Issa Jean Marie <jeanmarieissa@gmail.com>
 * @see {@link https://issadevs.com} - Author's website
 * @param args - The arguments for the query.
 * @param api - The BaseQueryApi instance.
 * @param extraOptions - Additional options for the query.
 * @returns The result of the query.
 * @description This function executes a query using the provided arguments and BaseQueryApi instance.
 * It allows you to implement any logic related to queries, such as handling errors, notifying users of failures, or performing any other query-related operations.
 * Note that logic related to handling mutations should be implemented in separate functions in the helpers module.
 */

const baseQueryWithErrorHandling = async (
	args: string | FetchArgs,
	api: BaseQueryApi,
	extraOptions: NonNullable<unknown>
) => {
	const result = await baseQuery(args, api, extraOptions);
	onbaseQueryError(result, api, extraOptions);

	return result;
};

export const baseAPI = createApi({
	reducerPath: "project-name",
	baseQuery: baseQueryWithErrorHandling,
	keepUnusedDataFor: DEFAULT_CACHE_TIME,
	refetchOnReconnect: true,
	tagTypes: API_TAG_TYPES,
	endpoints: () => ({}),
});
