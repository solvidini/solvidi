import { IPlaylist, PlaylistID } from "./music.types";
import { songs } from "./songs";

export const playlistTranceFusion: IPlaylist = {
	id: PlaylistID.TranceFusion,
	title: "Trance Fusion",
	author: "Solvidi",
	imageSrc: "/music/images/trance-fusion.jpeg",
	spotify: "https://open.spotify.com/playlist/3oly9Rb3bc7pRVG6c9yTvh?si=ea4f90f55bdd4192",
	soundcloud: "https://soundcloud.com/solvidi/sets/trance-fusion?si=89339d9d2de9424bba7b75c67db7ed1c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
	songs: songs.filter(song => song.playlistId === PlaylistID.TranceFusion)
}

export const playlistAvantGarde: IPlaylist = {
	id: PlaylistID.AvantGarde,
	title: "Avant-Garde",
	author: "Solvidi",
	imageSrc: "/music/images/avant-garde.jpeg",
	spotify: "https://open.spotify.com/playlist/5qCtLyjiLSTmSiXkb78g6n?si=16b22d41cd264d72",
	soundcloud: "https://soundcloud.com/solvidi/sets/avant-garde-rap-expedition?si=6db68d8cf8ae4c5682284939b2231bab&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
	songs: songs.filter(song => song.playlistId === PlaylistID.AvantGarde)
}

export const playlistSeishinDreams: IPlaylist = {
	id: PlaylistID.SeishinDreams,
	title: "Seishin Dreams",
	author: "Solvidi",
	imageSrc: "/music/images/seishin-dreams.jpeg",
	spotify: "https://open.spotify.com/playlist/0ZaiwjVRaLYqOYBpU0EfFx?si=cbf4960df536411f",
	soundcloud: "https://soundcloud.com/solvidi/sets/seishin-dreams?si=21fc4ca8ef7c4b6e8f73d6391c46df32&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
	songs: songs.filter(song => song.playlistId === PlaylistID.SeishinDreams)
}

export const playlists: IPlaylist[] = [playlistTranceFusion, playlistSeishinDreams, playlistAvantGarde]