"use client"

import { useUI } from "@/app/_contexts/ui-context"
import { twMerge } from "tailwind-merge"
import { Navigation } from "../../_components/Navigation"

export const Drawer = () => {
	const { isDrawerOpen, closeDrawer } = useUI()

	return (
		<div className="fixed bottom-0 inset-x-0 z-[250]">
			{isDrawerOpen && (
				<div
					className="fixed inset-0"
					onClick={closeDrawer}
				></div>
			)}
			<div
				className={twMerge(
					"fixed bottom-0 inset-x-0 w-full h-[15vh] px-md flex flex-col items-center justify-center gap-md transition-transform duration-300 transform ease-in-out bg-black/70 backdrop-blur border-t-[4px] border-t-secondary border-b-[4px] border-b-primary",
					"before:absolute before:bg-secondary before:left-0 before:top-0 before:w-[60px] before:h-[60px] before:cp-triangle",
					"after:absolute after:bg-primary after:right-0 after:bottom-0 after:w-[60px] after:h-[60px] after:cp-triangle after:rotate-180",
					isDrawerOpen ? "translate-y-0" : "translate-y-full",
				)}
			>
				<Navigation isDrawer />
			</div>
		</div>
	)
}
