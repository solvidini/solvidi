import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { Header } from "../_components/Header"
import { PlaylistCard } from "../_components/PlaylistCard"
import { SongCard } from "../_components/SongCard"

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="relative min-h-screen w-full fade-in">
			{/* <BackgroundVideo /> */}
			{/* <MusicCard className="w-4/5 mt-10" link="https://open.spotify.com/embed/track/6dHKwnhGnfi7r02W4WTcm5?utm_source=generator" /> */}
			<Header className="m-md">Latest releases</Header>
			<SongCard link="https://open.spotify.com/embed/track/6dHKwnhGnfi7r02W4WTcm5?utm_source=generator" />
			<PlaylistCard link="https://open.spotify.com/embed/playlist/5qCtLyjiLSTmSiXkb78g6n?utm_source=generator&theme=0" />
			{/* <div className="z-1 absolute top-4 left-4">
				<LocaleSwitcher dropdownPosition="bottom" />
			</div>
			<section className="z-1 absolute top-1/4 left-1/2 -translate-x-1/2 w-full text-center p-4">
				<h1 className="text-[35px] sm:text-[50px] tracking-wider flex flex-col items-center justify-center mb-4">
					<span className="font-caveat">{d.home.welcome}</span>
					<SeishinDreamsSVG className="max-w-full fill-gray-200 w-[600px] h-[150px] animate-breathe" />
				</h1>
				<span className="text-gray-100 text-xl font-caveat">
					✨ {d.home.quote} ✨
				</span>
			</section> */}
		</main>
	)
}
