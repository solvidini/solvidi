"use client"

import { Loader } from "@/app/[lang]/_components/Loader"
import { FC } from "react"
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs"
import { twMerge } from "tailwind-merge"
import { IAudioControlsProps } from "./AudioPlayer.types"

export const AudioControls: FC<IAudioControlsProps> = ({
	isPlaying,
	isLoading,
	className,
	info,
	togglePlay,
}) => {
	const sizeClasses = "w-[36px] h-[36px] sm:w-[30px] sm:h-[30px]"

	return (
		<div className={twMerge("flex flex-row-reverse sm:flex-row items-center gap-sm", className)}>
			{/* <BsFillSkipStartCircleFill className={sizeClasses} /> */}
			{isLoading && <Loader svgClassName={sizeClasses} />}
			{!isLoading && (
				<button
					className="text-light hover:text-highlight-light hover:scale-[1.2] transition-all"
					onClick={togglePlay}
				>
					{!isPlaying && <BsFillPlayCircleFill className={sizeClasses} />}
					{isPlaying && <BsFillPauseCircleFill className={sizeClasses} />}
				</button>
			)}
			{/* <BsFillSkipEndCircleFill className={sizeClasses} /> */}
			{info && (
				<div className="ml-0 mr-auto sm:ml-auto sm:mr-0 uppercase text-xs bg-highlight rounded-md py-xxs px-xs text-white font-semibold">
					{info}
				</div>
			)}
		</div>
	)
}
