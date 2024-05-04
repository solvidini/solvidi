import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface IHeaderProps {
	children: ReactNode
	className?: string
}

export const Header: FC<IHeaderProps> = ({ children, className }) => (
	<div
		className={twMerge(
			"drop-shadow-element whitespace-nowrap inline-flex items-center justify-center relative w-auto h-[32px] sm:h-[40px] cp-header bg-primary text-center px-[40px] sm:px-[48px]",
			className,
		)}
	>
		<h2 className="sm:text-lg">{children}</h2>
	</div>
)
