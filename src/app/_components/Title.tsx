import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ITitleProps {
	children: ReactNode
	className?: string
}

export const Title: FC<ITitleProps> = ({ children, className }) => (
	<div
		className={twMerge(
			"w-full tracking-[10px] flex items-center justify-center relative text-center px-xxl uppercase font-semibold",
			className,
		)}
	>
		<h2 className="text-xl sm:text-[32px]">{children}</h2>
	</div>
)
