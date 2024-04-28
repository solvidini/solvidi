import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="relative min-h-screen w-full fade-in">
			{/* <BackgroundVideo /> */}
			<iframe src="https://open.spotify.com/embed/track/6dHKwnhGnfi7r02W4WTcm5?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
