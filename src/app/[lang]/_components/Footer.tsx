"use client"

import Image from "next/image"
import { FaChevronUp } from "react-icons/fa"

import { socialMedia } from "@/_config"
import { getCurrentYear, scrollToTop } from "@/_utils"
import { ExternalLink } from "@/app/_components/ExternalLink"
import { LocaleSwitcher } from "@/app/_components/LocaleSwitcher"
import { Navigation } from "@/app/_components/Navigation"
import { WaveSVG } from "@/app/_svg/wave"

export const Footer = () => {
	return (
		<footer className="relative flex flex-col bg-black">
			<WaveSVG className="absolute fill-secondary top-[-6%] xs:top-[-12%] md:top-[-23%] xl:top-[-33%]" />
			<WaveSVG
				className="absolute fill-primary top-[-6%] xs:top-[-12%] md:top-[-22%] xl:top-[-34%]"
				style={{ transform: "rotateY(-180deg)" }}
			/>
			<WaveSVG className="absolute fill-black top-[-4%] xs:top-[-10%] md:top-[-20%] xl:top-[-30%]" />

			<button
				onClick={scrollToTop}
				className="z-0 w-[36px] h-[36px] bg-primary rounded-full p-2 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
			>
				<FaChevronUp
					size={20}
					className="animate-bounce"
				/>
			</button>

			{/* Social Media Navigation */}
			<div className="z-0 w-full p-4 mx-auto flex flex-col md:flex-row items-center relative gap-4 my-2">
				<div className="flex-1 flex items-center justify-center space-x-4 text-blue-300">
					{[
						socialMedia.facebook,
						socialMedia.instagram,
						socialMedia.tiktok,
						socialMedia.youtube,
					].map((sm) => (
						<ExternalLink
							key={sm.title}
							className="hover:scale-125"
							to={sm.link}
						>
							<Image
								src={sm.img}
								alt={sm.title}
								width={30}
								height={30}
								priority
							/>
						</ExternalLink>
					))}
				</div>

				{/* Navigation */}
				<nav className="flex-1 flex items-center justify-center">
					<div className="w-[240px] xl:w-auto">
						<Navigation />
					</div>
				</nav>

				{/* Language Selection Dropdown */}
				<div className="flex-1 flex items-center justify-center">
					<LocaleSwitcher />
				</div>
			</div>

			{/* Copyright */}
			<div className="z-0 relative text-center w-full p-4 text-xs border-t border-secondary-dark">
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
		</footer>
	)
}
