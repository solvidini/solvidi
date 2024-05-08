import { ISong } from "@/_data/music"

export interface IAudioPlayerProps {
	song: ISong
	className?: string
}

export interface IAudioControlsProps {
	isPlaying: boolean
	isLoading: boolean
	className?: string
	togglePlay(): void
}

export interface IAudioBarProps {
	currentTime: number
	duration: number
	length: string
	positionUpdate(time: number): void
	playSong(): void
	pauseSong(): void
}

export interface IAudioLinksProps {
	soundCloud: string
	spotify: string
	className?: string
}
