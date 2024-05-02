import { socialMedia } from "@/_config"
import { Header } from "@/app/_components/Header"
import { IconLink } from "@/app/_components/IconLink"
import { Title } from "@/app/_components/Title"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { TechnologyMatrix } from "./_components/TechnologyMatrix"

export default async function It({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in gap-lg">
			<Title>{d.it.title}</Title>
			<article className="w-full max-w-con-min px-lg flex flex-col items-center justify-center">
				<div className="text-justify mb-md">
					<p>{d.it.description[0]}</p>
				</div>
				<section className="w-full flex items-center justify-center gap-md mb-md">
					{[socialMedia.github, socialMedia.linkedin].map((sm) => (
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
				<Header className="mt-xl self-start">{d.it.skills.title}</Header>
				<section className="max-w-con-min">
					<TechnologyMatrix />
				</section>
			</article>
		</main>
	)
}
