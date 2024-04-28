export type ISocialMediaType =
	| "facebook"
	| "instagram"
	| "tiktok"
	| "youtube"
	| "spotify"
	| "soundcloud"

export interface ISocialMedia {
	title: string
	img: string
	link: string
}

export const socialMedia: Record<ISocialMediaType, ISocialMedia> = {
	facebook: {
		title: "Facebook",
		img: "/facebook.svg",
		link: "https://www.facebook.com/seishin.dreams",
	},
	instagram: {
		title: "Instagram",
		img: "/instagram.svg",
		link: "https://instagram.com/seishin.dreams",
	},
	tiktok: {
		title: "TikTok",
		img: "/tiktok.svg",
		link: "https://tiktok.com/@seishin.dreams",
	},
	youtube: {
		title: "YouTube",
		img: "/youtube.svg",
		link: "https://www.youtube.com/@seishin.dreams",
	},
	spotify: {
		title: "Spotify",
		img: "/spotify.svg",
		link: "https://open.spotify.com/artist/18Nd96HdpiyNGSPEKK1gza",
	},
	soundcloud: {
		title: "SoundCloud",
		img: "/soundcloud.svg",
		link: "https://soundcloud.com/solvidi",
	},
}
