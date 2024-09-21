import { IAPIErr } from "."

export interface HandleAPIRequestsCommonProps<RequestType, ResponseType> {
    requestFn: HandleAPIRequestsRequestType<RequestType>
    onSuccess?: (_payload: ResponseType) => void
    onFailure?: (_err: IAPIErr) => void
    lang?: TLanguages
    notifyOnErr?: boolean
    notifyOnSuccess?: boolean
    successMessage?: string
    errorMessage?: string
    notify?: TNotifyFunc
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HandleAPIRequestsRequestType<T> = (_params: T) => any
export type TNotificationType = "success" | "info" | "warning" | "error"
export type TLanguages = "rw" | "en"
export type TNotifyFunc = (_payload: INotifyPayload) => void
export interface INotificationContextProps {
    notify: (_payload: INotifyPayload) => void
}

export interface INotifyPayload {
    type?: TNotificationType
    message?: string
    description: string
}
