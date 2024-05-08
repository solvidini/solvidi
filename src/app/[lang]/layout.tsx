import { LocaleProvider } from "@/app/_contexts/locale-context"
import { UIProvider } from "@/app/_contexts/ui-context"
import { fetchDictionary } from "@/get-dictionary"
import { Barlow, Inter } from "next/font/google"
import { ReactNode } from "react"
import { FaChevronUp } from "react-icons/fa"
import { twMerge } from "tailwind-merge"
import { Locale, i18n } from "../../i18n-config"
import { Drawer } from "./_components/Drawer"
import { Footer } from "./_components/Footer"
import { Toolbar } from "./_components/Toolbar"
import "./global.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const barlow = Barlow({
	subsets: ["latin"],
	variable: "--font-barlow",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export async function generateMetadata({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return {
		title: "Solvidi",
		description: d.about.description,
		image: "/page-image.jpg",
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
			className={twMerge(inter.variable, barlow.variable)}
		>
			<body
				className={barlow.className}
				suppressHydrationWarning={true}
			>
				<div className="fixed w-screen h-screen bg-repeat opacity-5 bg-[length:300px_300px] bg-luxury-pattern" />
				<div className="relative mx-auto">
					<div className="w-full h-[82px] flex justify-center text-white">
						<FaChevronUp
							size={50}
							className="text-primary"
						/>
					</div>
					<LocaleProvider locale={lang}>
						<UIProvider>
							<Toolbar />
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
