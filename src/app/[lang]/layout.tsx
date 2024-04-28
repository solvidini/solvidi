import { Caveat, Inter, Playpen_Sans } from "next/font/google"
import { ReactNode } from "react"
import { FaChevronUp } from "react-icons/fa"

import { LocaleProvider } from "@/_contexts/locale-context"
import { UIProvider } from "@/_contexts/ui-context"
import { fetchDictionary } from "@/get-dictionary"
import { twMerge } from "tailwind-merge"
import { Locale, i18n } from "../../i18n-config"
import { Drawer } from "./_components/Drawer"
import { Footer } from "./_components/Footer"
import { Header } from "./_components/Header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })
const playpen_sans = Playpen_Sans({
	subsets: ["latin"],
	variable: "--font-playpen",
})

export async function generateMetadata({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return {
		title: "Seishin Dreams",
		description: d.about.description[0],
	}
}

export function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
	children,
	params: { lang },
}: {
	children: ReactNode
	params: { lang: Locale }
}) {
	return (
		<html
			lang={lang}
			className={twMerge(
				inter.variable,
				caveat.variable,
				playpen_sans.variable,
			)}
		>
			<body
				className={playpen_sans.className}
				suppressHydrationWarning={true}
			>
				<div className="fixed w-screen h-screen bg-repeat opacity-5 bg-[length:300px_300px] bg-luxury-pattern" />
				<div
					className="relative max-w-con-max mx-auto"
				>
					<div className="w-full h-[70px] flex items-center justify-center text-white">
						<FaChevronUp
							size={50}
							className="text-secondary"
						/>
					</div>
					<LocaleProvider locale={lang}>
						<UIProvider>
							<Header />
							{children}
							<Footer />
							<Drawer />
						</UIProvider>
					</LocaleProvider>
				</div>
			</body>
		</html>
	)
}
