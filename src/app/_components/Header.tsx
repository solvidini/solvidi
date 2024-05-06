import { FC, ReactNode } from "react"
import { IoMdMusicalNote, IoMdMusicalNotes } from "react-icons/io"
import { twMerge } from "tailwind-merge"

interface IHeaderProps {
	children: ReactNode
	className?: string
}

export const Header: FC<IHeaderProps> = ({ children, className }) => (
	<div className={twMerge("relative inline-block", className)}>
		<IoMdMusicalNotes className="absolute z-10 -left-[8px] -top-[4px] sm:-top-[6px] h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] -rotate-[18deg]" />
		<IoMdMusicalNote className="absolute z-10 right-0 -top-[2px] sm:-top-[4px] h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rotate-[16deg]" />
		<div className="relative drop-shadow-element whitespace-nowrap inline-flex items-center justify-center w-auto h-[32px] sm:h-[40px] cp-header bg-primary text-center px-[40px] sm:px-[48px]">
			<h2 className="sm:text-lg">{children}</h2>
		</div>
	</div>
)
