import Image from "next/image"

import { Title } from "@/app/_components/Title"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"

export default async function About({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in gap-lg">
			<Title>{d.about.title}</Title>
			<article className="relative w-full max-w-con-min px-lg flex flex-col items-center justify-center gap-lg">
				<Image
					className="transition-all z-10 ease-in-out duration-300 hover:scale-105 hover:brightness-105 rounded-full border-l-[6px] border-primary"
					src="/solvidi.jpeg"
					alt="Solvidi"
					width={300}
					height={300}
					priority
				/>
				<div className="text-justify">
					<p>{d.about.description[0]}</p>
				</div>
			</article>
		</main>
	)
}
