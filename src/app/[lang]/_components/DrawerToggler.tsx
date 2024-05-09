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
		className="ml-auto relative md:hidden rounded-full w-[40px] h-[40px]"
	>
		<div
			className={twMerge(
				"absolute w-[24px] h-[2px] bg-light transition-all duration-300 top-1/2 -mt-[6px] left-1/2 -translate-x-[calc(50%+4px)]",
				isDrawerOpen && "w-[28px] rotate-45 mt-0 -translate-x-1/2",
			)}
		/>
		<div
			className={twMerge(
				"absolute w-[32px] h-[2px] bg-light transition-opacity duration-300 top-1/2 left-1/2 -translate-x-1/2",
				isDrawerOpen && "opacity-0 my-0",
			)}
		/>
		<div
			className={twMerge(
				"absolute w-[24px] h-[2px] bg-light transition-all duration-300 mt-[6px] ml-auto top-1/2 left-1/2 -translate-x-[calc(50%-4px)]",
				isDrawerOpen && "w-[28px] -rotate-45 mt-0 -translate-x-1/2",
			)}
		/>
	</button>
)
