import { socialMedia } from "@/_config"
import { playlists, songs } from "@/_data/music"
import { AudioPlayer } from "@/app/_components/AudioPlayer/AudioPlayer"
import { AudioPlaylist } from "@/app/_components/AudioPlayer/AudioPlaylist"
import { AudioWave } from "@/app/_components/AudioWave"
import { Header } from "@/app/_components/Header"
import { IconLink } from "@/app/_components/IconLink"
import { Title } from "@/app/_components/Title"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"

export default async function Music({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in overflow-x-hidden">
			<Title>{d.music.title}</Title>
			<AudioWave
				className="flex items-center justify-center p-md scale-[0.6] sm:scale-[1]"
				amount={40}
			/>
			<article className="w-full max-w-con px-lg">
				<section className="max-w-con-min mx-auto text-justify">
					{d.music.description}
				</section>
				<section className="w-full flex items-center justify-center gap-md my-md">
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
					{songs.slice(0, 4).map((song) => (
						<AudioPlayer
							key={song.id}
							song={song}
						/>
					))}
				</div>
				<Header className="m-md">{d.music.playlists}</Header>
				<div className="w-full mx-auto flex flex-col items-center justify-center gap-md">
					{playlists.map((playlist) => (
						<AudioPlaylist
							key={playlist.id}
							{...playlist}
						/>
					))}
				</div>
			</article>
		</main>
	)
}
