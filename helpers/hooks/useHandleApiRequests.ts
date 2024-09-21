import { useNotification } from "@/components/shared/messages/notification"
import { IAPIErr } from "@/lib/types/integration"
import { HandleAPIRequestsCommonProps } from "@/lib/types/integration/apiHandler"
import { useDictionaries } from "./use-render"

/**
 * A custom hook that provides a common logic to handle API requests with success and failure notifications.
 *
 * @returns {Object} An object containing the `execute` function to trigger the API request.
 */

const useHandleAPIRequests = () => {
    const notify = useNotification()
    const { dic } = useDictionaries()

    /**
     * Executes the API request with provided parameters, handling success and failure cases.
     *
     * * @template RequestType - The type of the request payload.
     * @template ResponseType - The type of the expected response.
     *
     * @param {Object} args - The arguments object.
     * @param {function(RequestType): Promise<ResponseType>} args.requestFn - The function that makes the API request.
     * @param {function(ResponseType): void} [args.onSuccess] - Callback function to be executed on a successful API request.
     * @param {function(IAPIErr): void} [args.onFailure] - Callback function to be executed on a failed API request.
     * @param {boolean} [args.notifyOnErr=true] - Whether to show a notification on error. Defaults to `true`.
     * @param {boolean} [args.notifyOnSuccess=false] - Whether to show a notification on success. Defaults to `false`.
     * @param {string} [args.lang="en"] - The language for error messages. Defaults to `"en"`.
     * @param {...any} [args.requestParams] - Additional parameters to be passed to the API request function.
     * @param {function(Object): void} [args.notify] - Function to trigger notifications for success or error.
     *
     *
     * @throws {Error} If an unexpected error occurs during the API request.
     *
     * * * @example
     * const { execute } = useHandleAPIRequests();
     * execute<RequestType, ResponseType>({
     *   requestFn: api.getSomeData,
     *   onSuccess: handleSuccess,
     *   onFailure: handleFailure,
     *   notifyOnErr: true,
     *   notifyOnSuccess: false,
     *   lang: "en",
     *   requestParams: { additionalParam: "someValue" },
     * });
     */
    const execute = <RequestType, ResponseType>(
        args: HandleAPIRequestsCommonProps<RequestType, ResponseType>,
    ) => {
        const {
            requestFn,
            onSuccess,
            notifyOnSuccess,
            successMessage,
            errorMessage,
            onFailure,
            ...params
        } = args

        try {
            requestFn({ ...params } as RequestType)
                .unwrap()
                .then((response: ResponseType) => {
                    onSuccess && onSuccess(response as ResponseType)
                    if (notifyOnSuccess) {
                        notify({
                            type: "success",
                            description:
                                successMessage ||
                                ((response as { message: string })?.message ??
                                    "Request proccessed successfully!"),
                        })
                    }
                })
                .catch((err: IAPIErr) => {
                    onFailure && onFailure(err as IAPIErr)
                    notify({
                        message:
                            err?.data?.error || dic?.apiGenericErr.description,
                        type: "error",
                        description:
                            (errorMessage || err?.data?.message) ??
                            dic?.apiGenericErr.description,
                    })
                })
        } catch (error) {
            notify({
                description:
                    "Something is wrong with your call API global function...",
                type: "error",
                message: "UNKNOWN ERROR",
            })
        }
    }

    return { execute }
}

export default useHandleAPIRequests
