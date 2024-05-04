import Image from "next/image"

import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { ExternalLink } from "../_components/ExternalLink"
import { Header } from "../_components/Header"
import { LocaleLink } from "../_components/LocaleLink"
import { SongCard } from "../_components/SongCard"
import { HomeTitle } from "./_components/HomeTitle"
import { projects } from "./featured/_data"
import { songs } from "./music/_data"

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in overflow-x-hidden">
			<HomeTitle />
			<article className="w-full max-w-con px-lg">
				<Header className="m-md">{d.music.listen}</Header>
				<div className="w-full mx-auto flex flex-col items-center justify-center gap-md">
					<SongCard
						theme
						link={songs[0].url}
					/>
					<SongCard
						theme
						link={songs[1].url}
					/>
				</div>
				<div className="relatirve text-center p-md flex items-center justify-center">
					<LocaleLink
						className="z-10 whitespace-nowrap text-tertiary-light py-xxs px-sm rounded-full text-lg inline-block hover:scale-110 transition-all"
						to="/music"
					>
						{d.common.discover_more}
					</LocaleLink>
				</div>
			</article>
			<article className="w-full max-w-con px-lg">
				<Header className="m-md">{d.home.magical_world}</Header>
				<div className="relative rounded-md">
					<Image
						className="transition-all ease-in-out duration-300 brightness-[1.1] hover:brightness-125 border-[2px] border-secondary rounded-b-md rounded-tr-md"
						src={projects[0].src}
						alt={projects[0].title}
						width={1600}
						height={900}
						priority
					/>
					<ExternalLink
						className="inline-block absolute bottom-0 right-0 py-xxs sm:py-xs px-md text-sm bg-tertiary sm:bg-tertiary/90 text-black rounded-br-md rounded-tl-md hover:bg-tertiary"
						to={projects[0].url}
					>
						{d.common.go_to}
					</ExternalLink>
				</div>
			</article>
		</main>
	)
}
