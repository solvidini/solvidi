import { FC } from "react"
import { twMerge } from "tailwind-merge"

interface IDrawerTogglerProps {
	isDrawerOpen: boolean
	onClick(): void
}

export const DrawerToggler: FC<IDrawerTogglerProps> = ({
	isDrawerOpen,
	onClick,
}) => (
	<button
		onClick={onClick}
		className="transition-transform duration-300 ease-in-out md:hidden">
		<div
			className={twMerge(
				"w-6 h-0.5 bg-gray-200 transition-all duration-300 transform origin-center",
				isDrawerOpen && "w-8 rotate-45 bg-white",
			)}
		/>
		<div
			className={twMerge(
				"w-8 h-0.5 bg-gray-200 transition-all duration-300 transform origin-center my-1",
				isDrawerOpen && "opacity-0 my-0",
			)}
		/>
		<div
			className={twMerge(
				"w-5 h-0.5 bg-gray-200 transition-all duration-300 transform origin-center my-1 ml-auto",
				isDrawerOpen && "w-8 -rotate-45 bg-white -my-1",
			)}
		/>
	</button>
)
