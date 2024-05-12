"use client"

import { ISong } from "@/_data/music"
import { FC, ReactNode, createContext, useContext, useState } from "react"

interface MusicContextProps {
	contextSong: ISong | null
	changeContextSong(song: ISong | null): void
}

export const MusicContext = createContext<MusicContextProps | undefined>(
	undefined,
)

export const useMusic = (): MusicContextProps => {
	const context = useContext(MusicContext)

	if (!context) {
		throw new Error("useMusic must be used within a MusicProvider")
	}

	return context
}

export const MusicProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [contextSong, setContextSong] = useState<ISong | null>(null)

	const changeContextSong = (song: ISong | null) => {
		setContextSong(song)
	}

	const contextValue: MusicContextProps = {
		contextSong,
		changeContextSong,
	}

	return (
		<MusicContext.Provider value={contextValue}>
			{children}
		</MusicContext.Provider>
	)
}
