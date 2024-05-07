import { ISong } from "@/_data/music"

export interface IAudioPlayerProps {
	song: ISong
	className?: string
}

export interface IAudioControlsProps {
	isPlaying: boolean
	className?: string
	togglePlay(): void
}

export interface IAudioBarProps {
	currentTime: number
	duration: number
	onClick(time: number): void 
}

export interface IAudioLinksProps {
	soundCloud: string
	spotify: string
}
