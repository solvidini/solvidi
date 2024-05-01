import Image from "next/image"
import { FaEnvelope } from "react-icons/fa"

import { socialMedia } from "@/_config"
import { ExternalLink } from "@/app/_components/ExternalLink"
import { Header } from "@/app/_components/Header"
import { SolvidiSVG } from "@/app/_svg/solvidi"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"

export default async function Featured({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in">
			<Header>{`💌 ${d.featured.title} 💌`}</Header>
			<article className="max-w-con-min flex flex-col items-center gap-6 md:gap-8 p-4 pt-2 pb-6 md:p-6 xs:pt-4 mx-auto">
				<section className="flex flex-col gap-4">
					<div className="flex flex-wrap justify-center">
						<p className="text-left mr-2">{d.contact.description[0]}</p>
						<ExternalLink
							className="text-secondary inline-flex items-center"
							to="mailto:contact@seishindreams.com"
						>
							<FaEnvelope className="mr-1" /> contact@seishindreams.com
						</ExternalLink>
					</div>
					<p className="text-left xs:text-center">
						{d.contact.description[1]} 🚀 ✨
					</p>
				</section>
				<section className="flex items-center justify-center space-x-4 text-blue-300">
					{[
						socialMedia.facebook,
						socialMedia.instagram,
						socialMedia.tiktok,
						socialMedia.soundcloud,
						socialMedia.spotify,
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
				<SolvidiSVG className="fade-in fill-white/30 w-[300px] ml-sm" />

				{/* <Image
					src="/solvidi-logo.png"
					alt="SOL"
					width={300}
					height={300}
					className="opacity-10 m-2 w-[240px] md:w-[300px] h-[240px] md:h-[300px]"
					priority
				/> */}
			</article>
		</main>
	)
}
