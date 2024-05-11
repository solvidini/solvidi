import { ISong, PlaylistID } from "@/_data/music"

export interface IAudioPlayerProps {
	song: ISong
	className?: string
}

export interface IAudioPlaylistProps {
	id: PlaylistID
	title: string
	author: string
	imageSrc: string
	spotify: string
	soundcloud: string
	songs: ISong[]
	className?: string
}

export interface IAudioControlsProps {
	isPlaying: boolean
	isLoading?: boolean
	className?: string
	info?: string | false
	togglePlay(): void
	previousSong?(): void
	nextSong?(): void
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

export interface IAudioImageProps {
	isPlaying: boolean
	src: string
	alt: string
	className?: string
	onClick(): void
}

export interface ISongListProps {
	songs: ISong[]
	currentSongIndex: number
	isPlaying: boolean
	className?: string
	chooseSongByIndex(index: number): void
}