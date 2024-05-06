"use client"

import { FC, useState } from "react"

import { useLocale } from "@/_contexts/locale-context"
import { twMerge } from "tailwind-merge"
import { TechnologyType, technologies } from "../_data"
import { Technology } from "./Technology"

const buttonClasses =
	"select-none p-md cursor-pointer uppercase tracking-wider text-white transition-transform duration-200 ease-in-out"

export const TechnologyMatrix: FC = () => {
	const { dictionary: d } = useLocale()
	const [isActive, setIsActive] = useState<boolean>(false)
	const [highlightedType, setHighlightedType] = useState<TechnologyType | null>(
		null,
	)

	const highlightTechnologies = (type: TechnologyType) => {
		setHighlightedType((prevState) => (prevState === type ? null : type))
	}

	return (
		<>
			<div className="relative z-[1] text-center text-shadow-md flex justify-center">
				<div
					className={twMerge(
						buttonClasses,
						highlightedType === TechnologyType.Front && "text-tertiary",
					)}
					onClick={() => highlightTechnologies(TechnologyType.Front)}
				>
					Frontend
				</div>
				<div
					className={twMerge(
						buttonClasses,
						highlightedType === TechnologyType.Back && "text-tertiary",
					)}
					onClick={() => highlightTechnologies(TechnologyType.Back)}
				>
					Backend
				</div>
				<div
					className={twMerge(
						buttonClasses,
						highlightedType === TechnologyType.Other && "text-tertiary",
					)}
					onClick={() => highlightTechnologies(TechnologyType.Other)}
				>
					{d.it.skills.other}
				</div>
			</div>
			<div
				className="drop-shadow-element relative mx-auto perspective-1000 filter mb-md sm:mb-xl md:mb-xs -mt-lg sm:-mt-[40px] md:-mt-lg lg:-mt-[52px]"
				style={{ zIndex: isActive ? 20 : 0 }}
			>
				<div
					className="mx-auto w-[296px] sm:w-[354px] md:w-[606px] lg:w-[800px] flex flex-wrap rotate-x-[20deg] md:rotate-x-[30deg] lg:rotate-x-[40deg]"
					style={{ transformStyle: "preserve-3d" }}
					onPointerEnter={() => setIsActive(true)}
					onPointerLeave={() => setIsActive(false)}
					onClick={() => setIsActive(true)}
					onBlur={() => setIsActive(false)}
				>
					{technologies.map(({ id, src, name, type, className }) => (
						<Technology
							id={id}
							key={id}
							src={src}
							name={name}
							highlight={highlightedType === type}
							className={className}
						/>
					))}
				</div>
			</div>
			<div className="text-center text-sm text-gray-400">
				{d.common.more}...
			</div>
		</>
	)
}
