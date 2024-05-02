import { socialMedia } from "@/_config"
import { Header } from "@/app/_components/Header"
import { IconLink } from "@/app/_components/IconLink"
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
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in">
			<Title>{d.music.title}</Title>
			<article className="w-full max-w-con px-lg">
				<section className="max-w-con-min mx-auto text-justify my-md">
					{d.music.description}
				</section>
				<section className="w-full flex items-center justify-center gap-md mb-md">
					{[
						socialMedia.spotify,
						socialMedia.soundcloud,
						socialMedia.applemusic,
						socialMedia.amazonmusic,
					].map((sm) => (
						<IconLink
							key={sm.title}
							title={sm.title}
							link={sm.link}
							imgSrc={sm.img}
							width={60}
							height={60}
							iconClassName="w-[50px] md:w-[60px] h-[50px] md:h-[60px]"
						/>
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
