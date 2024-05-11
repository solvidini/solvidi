"use client"

import { ISong } from "@/_data/music"
import { FC, ReactNode, createContext, useContext, useState } from "react"

interface MusicContextProps {
	contextSong: ISong | null
	setContextSong(song: ISong | null): void
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
	const [contextSong, setcontextSong] = useState<ISong | null>(null)

	const setContextSong = (song: ISong | null) => {
		setcontextSong(song)
	}

	const contextValue: MusicContextProps = {
		contextSong,
		setContextSong,
	}

	return (
		<MusicContext.Provider value={contextValue}>
			{children}
		</MusicContext.Provider>
	)
}
