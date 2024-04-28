import Image from "next/image"

import { PageTitle } from "@/app/_components/PageTitle"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"

export default async function About({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in mb-10">
			<PageTitle>{`🌟 ${d.about.title} 🌟`}</PageTitle>
			<article className="max-w-con-min flex flex-col items-center gap-6 md:gap-8 px-4 md:p-6 text-left mx-auto">
				<Image
					className="transition-all ease-in-out duration-300 hover:scale-105 hover:brightness-105"
					src="/betta-fish.png"
					alt="Betta Fish"
					width={300}
					height={225}
					priority
				/>
				<div className="flex flex-col gap-4">
					<p>{d.about.description[0]}</p>
					<p>{d.about.description[1]}</p>
					<p>{d.about.description[2]}</p>
				</div>
			</article>
		</main>
	)
}
