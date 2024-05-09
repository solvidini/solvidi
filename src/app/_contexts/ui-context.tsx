"use client"

import { FC, ReactNode, createContext, useContext, useState } from "react"

interface UIContextProps {
	isDrawerOpen: boolean
	openDrawer: () => void
	closeDrawer: () => void
}

export const UIContext = createContext<UIContextProps | undefined>(undefined)

export const useUI = (): UIContextProps => {
	const context = useContext(UIContext)

	if (!context) {
		throw new Error("useUI must be used within a UIProvider")
	}

	return context
}

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

	const openDrawer = () => {
		setIsDrawerOpen(true)
	}

	const closeDrawer = () => {
		setIsDrawerOpen(false)
	}

	const contextValue: UIContextProps = {
		isDrawerOpen,
		openDrawer,
		closeDrawer,
	}

	return (
		<UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
	)
}
