export interface IAPIResponse<T> {
    message: string
    payload: T
    translatedMessage: string
}

export interface IAPIContentResponse<T> {
    message: string
    payload: {
        content: T[]
        page: {
            size: number
            number: number
            totalElements: number
            totalPages: number
        }
    }
}

export interface IAPIError {
    status: number
    data: {
        message: string
    }
}

export interface IAPIBaseRequestBody {
    page?: number
    size?: number
}

export interface IAPIErr {
    data: {
        statusCode: number
        error: string
        message: string
        timestamp: Date
        path: string
    }
}
