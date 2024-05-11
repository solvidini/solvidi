export enum PlaylistID {
	TranceFusion = 'trance-fusion',
	AvantGarde = 'avant-garde',
	SeishinDreams = 'seishin-dreams'
}

export interface ISong {
	id: string
	playlistId: PlaylistID
	title: string
	author: string
	length: string
	preview: boolean
	imageSrc: string
	songSrc: string
	spotify: string
	soundcloud: string
}

export interface IPlaylist {
	id: PlaylistID
	title: string
	author: string
	imageSrc: string
	spotify: string
	soundcloud: string
	songs: ISong[]
}