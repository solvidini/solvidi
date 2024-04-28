"use client"

import Image from "next/image"

import { useUI } from "@/_contexts/ui-context"
import { twMerge } from "tailwind-merge"
import { Navigation } from "../../_components/Navigation"

export const Drawer = () => {
	const { isDrawerOpen, closeDrawer } = useUI()

	return (
		<div className="fixed bottom-0 inset-x-0 z-[250]">
			{isDrawerOpen && (
				<div
					className="fixed inset-0"
					onClick={closeDrawer}></div>
			)}
			<div
				className={twMerge(
					"fixed -bottom-2 inset-x-0 w-full h-[30vh] p-4 flex flex-col items-center justify-center gap-md px-xl transition-transform duration-300 transform ease-in-out bg-primary cp-drawer before:absolute before:bg-black before:left-0 before:bottom-0 before:-z-10 before:w-full before:h-[98%] before:cp-drawer",
					isDrawerOpen ? "translate-y-0" : "translate-y-full",
				)}>
				<Image
					className={twMerge(
						"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.2]",
						isDrawerOpen ? "" : "hidden",
					)}
					src="/betta-fish.png"
					alt="Betta Fish"
					width={250}
					height={200}
					priority
				/>
				<Navigation isDrawer />
			</div>
		</div>
	)
}
