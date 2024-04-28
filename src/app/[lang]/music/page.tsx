import Image from "next/image"

import { socialMedia } from "@/_config"
import { ExternalLink } from "@/app/_components/ExternalLink"
import { PageTitle } from "@/app/_components/PageTitle"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { YouTubeVideo } from "./_components/YouTubeVideo"
import { videos } from "./_data"

export default async function Music({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in mb-12 sm:mb-14 lg:mb-16">
			<PageTitle>{`🎶 ${d.music.title} 🎶`}</PageTitle>
			<article className="max-w-con-min flex flex-col gap-4 p-4 pt-2 pb-6 md:p-6 xs:pt-4 text-left mx-auto">
				<p>{d.music.description[0]} 🥁</p>
				<div className="flex flex-col">
					<h3 className="font-semibold text-secondary-light mb-1">
						{d.music.description[1]}
					</h3>
					{[socialMedia.youtube, socialMedia.soundcloud].map((sm) => (
						<ExternalLink
							key={sm.title}
							to={sm.link}
							className="inline-flex items-center gap-2 w-min hover:scale-110"
						>
							<span>{sm.title}</span>
							<Image
								src={sm.img}
								alt={sm.title}
								width={30}
								height={30}
								priority
							/>
						</ExternalLink>
					))}
				</div>
				<p>{d.music.description[2]}</p>
			</article>
			<section className="w-full px-4 md:px-6 max-w-con-min flex flex-col">
				<h3 className="font-semibold mb-6 text-center text-secondary-light">
					{d.music.description[3]} 🎵 🎥 ✨
				</h3>
				<div className="w-full flex flex-col items-center justify-center gap-4">
					{videos.map(({ title, id }) => (
						<div
							className="pt-2 sm:p-4 gap-2 sm:gap-4 bg-dark rounded-xl w-full sm:w-auto flex flex-col"
							key={id}
						>
							<h6 className="text-lg font-semibold uppercase font-caveat text-center sm:text-left sm:ml-4">
								{title}
							</h6>
							<YouTubeVideo videoId={id} />
						</div>
					))}
				</div>
			</section>
		</main>
	)
}
