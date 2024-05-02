export type ISocialMediaType =
	| "facebook"
	| "linkedin"
	| "instagram"
	| "tiktok"
	| "youtube"
	| "spotify"
	| "soundcloud"
	| "applemusic"
	| "amazonmusic"
	| "github"

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
	linkedin: {
		title: "LinkedIn",
		img: "/linkedin.svg",
		link: "https://www.linkedin.com/in/samuelkedziora",
	},
	github: {
		title: "GitHub",
		img: "/github.svg",
		link: "https://github.com/solvidini",
	},
	instagram: {
		title: "Instagram",
		img: "/instagram.svg",
		link: "https://instagram.com/solvidi",
	},
	tiktok: {
		title: "TikTok",
		img: "/tiktok.svg",
		link: "https://tiktok.com/@solvidi",
	},
	youtube: {
		title: "YouTube",
		img: "/youtube.svg",
		link: "https://www.youtube.com/@solvidi",
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
	applemusic: {
		title: "Apple Music",
		img: "/apple-music.svg",
		link: "https://music.apple.com/us/artist/solvidi/1739943845",
	},
	amazonmusic: {
		title: "Amazon Music",
		img: "/amazon-music.svg",
		link: "https://music.amazon.in/artists/B0CZ3V56Y6/solvidi",
	},
}
