import Image from "next/image"
import { FaEnvelope } from "react-icons/fa"

import { socialMedia } from "@/_config"
import { ExternalLink } from "@/app/_components/ExternalLink"
import { Title } from "@/app/_components/Title"
import { SolvidiSVG } from "@/app/_svg/solvidi"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"

export default async function Contact({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in">
			<Title>{d.contact.title}</Title>
			<article className="max-w-con-min flex flex-col items-center gap-6 md:gap-8 p-4 pt-2 pb-6 md:p-6 xs:pt-4 mx-auto">
				<section className="flex flex-col gap-4">
					<div className="flex flex-wrap justify-center">
						<p className="text-left mr-2">{d.contact.description[0]}</p>
						<ExternalLink
							className="text-tertiary inline-flex items-center"
							to="mailto:contact@solvidi.pro"
						>
							<FaEnvelope className="mr-1" /> contact@solvidi.pro
						</ExternalLink>
					</div>
					<p className="text-left xs:text-center">
						{d.contact.description[1]} 🚀 ✨
					</p>
				</section>
				<section className="flex items-center justify-center space-x-4 text-blue-300">
					{[
						socialMedia.linkedin,
						socialMedia.instagram,
						socialMedia.spotify,
						socialMedia.soundcloud,
					].map((sm) => (
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
				<SolvidiSVG className="fade-in fill-light w-[300px] ml-sm" />
			</article>
		</main>
	)
}
