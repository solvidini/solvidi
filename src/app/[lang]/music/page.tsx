import Image from "next/image"

import { socialMedia } from "@/_config"
import { ExternalLink } from "@/app/_components/ExternalLink"
import { Header } from "@/app/_components/Header"
import { PlaylistCard } from "@/app/_components/PlaylistCard"
import { SongCard } from "@/app/_components/SongCard"
import { Title } from "@/app/_components/Title"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { playlists, songs } from "./_data"

export default async function Music({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in mb-xxl">
			<article className="w-full max-w-con px-lg">
				<Title>{d.music.title}</Title>
				<section className="max-w-con-min mx-auto text-justify my-md">
					{d.music.description}
				</section>
				<section className="w-full flex items-center justify-center gap-md mb-md">
					{[socialMedia.spotify, socialMedia.soundcloud, socialMedia.applemusic, socialMedia.amazonmusic].map((sm) => (
						<ExternalLink
							key={sm.title}
							className="hover:scale-125"
							to={sm.link}
						>
							<Image
								src={sm.img}
								alt={sm.title}
								width={60}
								height={60}
								className="w-[50px] md:w-[60px] h-[50px] md:h-[60px]"
								priority
							/>
						</ExternalLink>
					))}
				</section>
				<Header className="m-md">{d.music.latest}</Header>
				<div className="w-full mx-auto flex flex-col items-center justify-center gap-md">
					{songs.map(({ url }) => (
						<SongCard
							theme
							link={url}
						/>
					))}
				</div>
				<Header className="m-md">{d.music.playlists}</Header>
				<div className="w-full mx-auto flex flex-col items-center justify-center gap-md">
					{playlists.map(({ url }) => (
						<PlaylistCard
							theme
							link={url}
						/>
					))}
				</div>
			</article>
		</main>
	)
}
