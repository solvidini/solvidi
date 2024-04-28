"use client"

import { useUI } from "@/_contexts/ui-context"
import { DotsSVG } from "@/app/_svg/dots"
import { SdSVG } from "@/app/_svg/sd"
import { SeishinDreamsSVG } from "@/app/_svg/seishin-dreams"
import { useMediaQuery } from "@react-hook/media-query"
import Link from "next/link"
import { useEffect, useState } from "react"
import BREAKPOINTS from "../../../_config/breakpoints.json"
import { Navigation } from "../../_components/Navigation"
import { DrawerToggler } from "./DrawerToggler"

export const Header = () => {
	const [windowSize, setWindowSize] = useState<"loading" | "small" | "big">(
		"loading",
	)
	const { isDrawerOpen, openDrawer } = useUI()
	const matches = useMediaQuery(`(min-width: ${BREAKPOINTS.sm})`)

	useEffect(() => {
		setWindowSize(matches ? "big" : "small")
	}, [matches])

	return (
		<header className="overflow-hidden fixed top-0 left-0 z-[200] w-full h-[70px] bg-primary cp-header before:absolute before:bg-black before:left-0 before:top-0 before:-z-10 before:w-full before:h-[94%] before:cp-header pb-[10px]">
			<DotsSVG className="-z-10 absolute fill-secondary w-[200px] left-0 -translate-y-[80%] -translate-x-[25%] -rotate-[55deg]" />
			<DotsSVG className="-z-10 absolute fill-secondary w-[200px] right-0 -translate-y-[80%] translate-x-[25%] rotate-45" />
			<div className="max-w-con-max h-full mx-auto px-md sm:px-xl flex items-center justify-between gap-lg">
				<Link
					className="relative w-[50px] sm:w-[170px] h-[50px] flex items-center justify-center"
					href="/">
					{windowSize === "big" ? (
						<SeishinDreamsSVG className="fade-in fill-gray-200 w-[170px] h-[50px]" />
					) : windowSize === "small" ? (
						<SdSVG className="fade-in fill-gray-200 w-[46px] h-[46px]" />
					) : null}
				</Link>
				<div className="hidden md:block fade-in">
					<Navigation />
				</div>
				<DrawerToggler
					isDrawerOpen={isDrawerOpen}
					onClick={openDrawer}
				/>
			</div>
		</header>
	)
}
