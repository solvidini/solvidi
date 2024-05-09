"use client"

import { ISong } from "@/_data/music"
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState
} from "react"

interface MusicContextProps {
  currentSong: ISong | null
	setSong(song: ISong | null): void
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
  const [currentSong, setCurrentSong] = useState<ISong | null>(null)

	const setSong = (song: ISong | null) => {
		setCurrentSong(song)
	}

	const contextValue: MusicContextProps = {
    currentSong,
		setSong
	}

	return (
		<MusicContext.Provider value={contextValue}>
			{children}
		</MusicContext.Provider>
	)
}
