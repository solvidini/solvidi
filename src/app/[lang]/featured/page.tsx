import { Title } from "@/app/_components/Title"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"

export default async function Featured({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in gap-lg">
			<Title>{d.featured.title}</Title>
			<article className="w-full max-w-con px-lg">
				<section className="max-w-con-min mx-auto text-justify my-md">
					{d.featured.description}
				</section>
			</article>
		</main>
	)
}
