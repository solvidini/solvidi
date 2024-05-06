"use client"

import { FaChevronUp } from "react-icons/fa"

import { socialMedia } from "@/_config"
import { useLocale } from "@/_contexts/locale-context"
import { getCurrentYear, scrollToTop } from "@/_utils"
import { ExternalLink } from "@/app/_components/ExternalLink"
import { IconLink } from "@/app/_components/IconLink"
import { LocaleSwitcher } from "@/app/_components/LocaleSwitcher"
import { Navigation } from "@/app/_components/Navigation"
import { twMerge } from "tailwind-merge"

export const Footer = () => {
	const { dictionary: d } = useLocale()

	return (
		<footer className="relative flex flex-col mt-xxl w-full">
			<button
				onClick={scrollToTop}
				className="w-[36px] h-[36px] rotate-45 rounded-tl-md rounded-br-lg bg-primary absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
			>
				<FaChevronUp
					size={26}
					className="animate-bounce -rotate-45 text-light hover:text-white transition-colors -mt-[7px] -ml-[7px]"
				/>
			</button>

			{/* Social Media Navigation */}
			<div
				className={twMerge(
					"relative z-0 w-full bg-primary p-lg mx-auto flex flex-col md:flex-row items-center gap-xl",
					"before:absolute before:top-0 before:left-0 before:h-[48px] before:w-[40px] before:bg-secondary before:cp-triangle",
					"after:absolute after:bottom-0 after:right-0 after:h-full after:w-[8px] after:bg-secondary",
				)}
			>
				<div className="flex-1 flex items-center justify-center space-x-4 text-blue-300">
					{[
						socialMedia.spotify,
						socialMedia.linkedin,
						socialMedia.instagram,
						socialMedia.tiktok,
						socialMedia.youtube,
					].map((sm) => (
						<IconLink
							key={sm.title}
							title={sm.title}
							link={sm.link}
							imgSrc={sm.img}
						/>
					))}
				</div>

				{/* Navigation */}
				<nav className="flex-1 flex items-center justify-center">
					<Navigation />
				</nav>

				{/* Language Selection Dropdown */}
				<div className="flex-1 flex items-center justify-center">
					<LocaleSwitcher />
				</div>
			</div>

			{/* Copyright */}
			<div className="z-0 relative text-center w-full px-lg pt-lg pb-xs text-xs backdrop-blur">
				<p>
					<span className="text-gray-200">
						&#169; {getCurrentYear()} Solvidi
					</span>
					{". "}
					<span className="text-gray-400">
						Icons by{" "}
						<ExternalLink
							className="underline"
							to="https://icons8.com/"
						>
							icons8
						</ExternalLink>
					</span>
				</p>
			</div>

			{/* Cookies */}
			<div className="px-lg pb-lg w-full text-xs text-gray-400 text-center backdrop-blur border-b border-secondary">
				{d.common.cookies}
			</div>
		</footer>
	)
}
