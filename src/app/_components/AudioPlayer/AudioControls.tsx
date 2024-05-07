"use client"

import { FC } from "react"
import {
	BsFillPauseCircleFill,
	BsFillPlayCircleFill
} from "react-icons/bs"
import { twMerge } from "tailwind-merge"
import { IAudioControlsProps } from "./AudioPlayer.types"

export const AudioControls: FC<IAudioControlsProps> = ({
	isPlaying,
	className,
	togglePlay,
}) => {
	return (
		<div
			className={twMerge("flex items-center gap-sm", className)}
		>
			{/* <BsFillSkipStartCircleFill className="w-[30px] h-[30px]" /> */}
			<button className="text-light hover:text-highlight-light hover:scale-[1.2] transition-all" onClick={togglePlay}>
				{!isPlaying && <BsFillPlayCircleFill className="w-[30px] h-[30px]" />}
				{isPlaying && <BsFillPauseCircleFill className="w-[30px] h-[30px]" />}
			</button>
			{/* <BsFillSkipEndCircleFill className="w-[30px] h-[30px]" /> */}
		</div>
	)
}
