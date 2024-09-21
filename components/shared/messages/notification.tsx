"use client"
import {
    INotificationContextProps,
    TNotificationType,
} from "@/lib/types/integration/apiHandler"
import { notification } from "antd"
import React, { createContext, useContext, useMemo } from "react"
import GComponent from ".."

const NotificationContext = createContext<INotificationContextProps | null>(
    null,
)

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [api, contextHolder] = notification.useNotification()

    const notify = ({
        type = "info",
        message = "Notification",
        description,
    }: {
        type?: TNotificationType
        message?: string
        description: string
    }) => {
        api[type]({
            message,
            description,
            placement: "bottom",
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = useMemo(() => ({ notify }), [api])

    return (
        <GComponent>
            <NotificationContext.Provider value={value}>
                {contextHolder}
                {children}
            </NotificationContext.Provider>
        </GComponent>
    )
}

export const useNotification = () => {
    const context = useContext(NotificationContext)
    if (!context) {
        throw new Error(
            "useNotification must be used within a NotificationProvider",
        )
    }
    return context.notify
}
