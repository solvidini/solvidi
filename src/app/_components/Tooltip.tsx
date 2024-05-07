"use client"

import { FC, ReactNode, useState } from "react"
import { twMerge } from "tailwind-merge"

interface ITooltipProps {
	children: ReactNode
	content: string
	className?: string
}

export const Tooltip: FC<ITooltipProps> = ({
	children,
	content,
	className,
}) => {
	const [isShown, setIsShown] = useState<boolean>(false)

	const handleShowTooltip = () => {
		setIsShown(true)
	}

	const handleHideTooltip = () => {
		setIsShown(false)
	}

	return (
		<div
			className={twMerge("relative w-auto h-auto", className)}
			onTouchStart={handleShowTooltip}
			onTouchEnd={handleHideTooltip}
			onPointerEnter={handleShowTooltip}
			onPointerLeave={handleHideTooltip}
		>
			{children}
			<div
				className={twMerge(
					"absolute z-[100] drop-shadow-md bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 scale-0 w-auto whitespace-nowrap bg-highlight text-white rounded-md text-center px-xs py-xxs transition-transform duration-200 ease",
					"before:absolute before:w-0 before:h-0 before:left-1/2 before:-bottom-[8px] before:-translate-x-1/2 before:border-l-[6px] before:border-t-[8px] before:border-r-[6px] before:border-highlight before:border-l-transparent before:border-r-transparent",
					isShown && "scale-100",
				)}
			>
				{content}
			</div>
		</div>
	)
}
