import Image from "next/image"

import { ExternalLink } from "@/app/_components/ExternalLink"
import { Header } from "@/app/_components/Header"
import { Title } from "@/app/_components/Title"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { projects } from "./_data"

export default async function Featured({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in">
			<Title>{d.featured.title}</Title>
			<article className="w-full max-w-con px-lg">
				<section className="max-w-con-min mx-auto text-justify mt-md mb-xl">
					{d.featured.description}
				</section>
				<section className="max-w-con-min mx-auto flex flex-col items-center justify-center gap-md">
					{projects.map((project) => (
						<div className="relative rounded-md">
							<Header>{project.title}</Header>
							<Image
								className="transition-all ease-in-out duration-300 brightness-[1.1] hover:brightness-125 border-[2px] border-secondary rounded-b-md rounded-tr-md"
								src={project.src}
								alt={project.title}
								width={1600}
								height={900}
								priority
							/>
							<ExternalLink
								className="inline-block absolute bottom-0 right-0 py-xxs sm:py-xs px-md text-sm bg-tertiary sm:bg-tertiary/90 text-black rounded-br-md rounded-tl-md hover:bg-tertiary"
								to={project.url}
							>
								{d.common.go_to}
							</ExternalLink>
						</div>
					))}
				</section>
			</article>
		</main>
	)
}
