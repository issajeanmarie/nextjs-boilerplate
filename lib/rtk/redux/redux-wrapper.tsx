"use client"
import "@/helpers/extensions"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "./store"

/**
 * A wrapper component that provides Redux store to its children.
 * @component
 * @param {ReactNode} children - The child components to be wrapped.
 * @returns {JSX.Element} - The wrapped component with Redux store.
 */

const ReduxWrapper = ({ children }: { children: ReactNode }): JSX.Element => {
    return <Provider store={store}>{children}</Provider>
}

export default ReduxWrapper
