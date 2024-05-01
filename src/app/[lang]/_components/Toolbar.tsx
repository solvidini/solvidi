"use client"

import { useLocale } from "@/_contexts/locale-context"
import { useUI } from "@/_contexts/ui-context"
import { SolvidiSVG } from "@/app/_svg/solvidi"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { Navigation } from "../../_components/Navigation"
import { DrawerToggler } from "./DrawerToggler"

export const Toolbar = () => {
	const { getLocaleUrl } = useLocale()
	const { isDrawerOpen, openDrawer } = useUI()

	return (
		<header
			className={twMerge(
				"fixed top-0 left-0 z-[200] w-full h-[50px] bg-light border-r-[8px] border-secondary drop-shadow-element",
			)}
		>
			<div
				className={twMerge(
					"absolute z-[-1] left-0 top-[50px] bg-secondary w-[220px] h-[16px] flex items-center justify-center",
					"after:absolute after:left-full after:top-0 after:cp-triangle after:bg-secondary after:w-[18px] after:h-[16px]",
				)}
			/>
			<Link
				className={twMerge(
					"absolute left-0 top-0 bg-primary w-[100px] h-[82px] flex items-center justify-center",
					"after:absolute after:left-full after:top-0 after:cp-triangle after:bg-primary after:w-[80px] after:h-[82px]",
				)}
				href={getLocaleUrl("/")}
			>
				<SolvidiSVG className="fade-in fill-white w-[90px] ml-sm" />
			</Link>
			<div className="max-w-con-max h-full mx-auto px-md sm:px-xl flex items-center justify-between gap-lg">
				<div className="hidden md:block fade-in ml-auto">
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
