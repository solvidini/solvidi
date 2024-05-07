import React, { FC } from "react"
import { isMobile } from "react-device-detect"
import { twMerge } from "tailwind-merge"

import Image from "next/image"

interface ITechnologyProps {
	id: string
	src: string
	name: string
	highlight?: boolean
	className?: string
}

export const Technology: FC<ITechnologyProps> = ({
	id,
	src,
	name,
	highlight,
	className,
}) => {
	const [isActive, setIsActive] = React.useState<boolean>(false)

	return (
		<div
			id={id}
			className={twMerge(
				"relative z-[20] select-none perspective-origin-center backface-hidden h-[60px] min-w-[60px] sm:h-[80px] sm:min-w-[80px] lg:h-[100px] lg:min-w-[100px] w-auto p-sm text-center flex-auto cursor-pointer bg-opacity-85 bg-black/80 border border-dark origin-bottom transition-transform duration-500 ease flex items-center justify-center",
				highlight && "border-tertiary",
				isActive &&
					"rotate-x-[-20deg] md:rotate-x-[-30deg] lg:rotate-x-[-40deg] border-highlight",
				className,
			)}
			onClick={() => {
				setIsActive((prevState) => !prevState)
			}}
			onMouseEnter={() => {
				!isMobile ? setIsActive(true) : null
			}}
			onMouseLeave={() => {
				setIsActive(false)
			}}
		>
			<Image
				className="transition-all duration-300 ease w-auto h-full"
				src={src}
				alt={name}
				height={200}
				width={200}
			/>
			<div
				className={twMerge(
					"absolute z-[100] drop-shadow-md -top-[40px] left-1/2 -translate-x-1/2 scale-0 w-auto whitespace-nowrap bg-light text-black rounded-md text-center px-xs py-xxs transition-transform duration-300 ease",
					"before:absolute before:w-0 before:h-0 before:left-1/2 before:-bottom-[8px] before:-translate-x-1/2 before:border-l-[6px] before:border-t-[8px] before:border-r-[6px] before:border-light before:border-l-transparent before:border-r-transparent",
					isActive && "scale-100",
				)}
			>
				{name}
			</div>
		</div>
	)
}
