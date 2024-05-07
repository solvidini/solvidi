"use client"
import Image from "next/image"

import { FC, useCallback, useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { AudioBar } from "./AudioBar"
import { AudioControls } from "./AudioControls"
import { AudioLinks } from "./AudioLinks"
import { IAudioPlayerProps } from "./AudioPlayer.types"

export const AudioPlayer: FC<IAudioPlayerProps> = ({ song, className }) => {
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [duration, setDuration] = useState<number>(0)
	const [currentTime, setCurrentTime] = useState<number>(0)

	const togglePlay = () => {
		if (!audioRef.current) {
			return
		}
		const toggledIsPlaying = !isPlaying

		if (toggledIsPlaying) {
			audioRef.current.play()
			setIsPlaying(toggledIsPlaying)

			return
		}

		audioRef.current.pause()
		setIsPlaying(toggledIsPlaying)
	}

	const handleTimeUpdate = () => {
		if (!audioRef.current) {
			return
		}
		const time = parseFloat(audioRef.current.currentTime.toFixed(2))

		setCurrentTime(time)
	}

	const changeSongTimePosition = (position: number) => {
		if (!audioRef.current) {
			return
		}
		audioRef.current.currentTime = position * duration
	}

	const handleAudioEnd = useCallback(() => {
			setCurrentTime(0)
			setIsPlaying(false)
	}, [])

	useEffect(() => {
		if (!audioRef.current) {
			return
		}

		setDuration(audioRef.current.duration)

		audioRef.current?.addEventListener("ended", handleAudioEnd)

		return () => {
			audioRef.current?.removeEventListener("ended", handleAudioEnd)
		}
	}, [audioRef.current, handleAudioEnd])

	return (
		<div
			className={twMerge(
				"relative w-full bg-black/70 border border-secondary rounded-md backdrop-blur p-md grid grid-cols-[auto,1fr] gap-md",
				className,
			)}
		>
			<Image
				className="w-[120px] h-[120px] rounded-md"
				src={song.imageSrc}
				alt={song.title}
				width={120}
				height={120}
			/>
			<div className="w-full h-full flex flex-col">
				<div className="flex justify-between items-start">
					<div className="flex flex-col">
						<h6 className="font-semibold">{song.title}</h6>
						<h6 className="text-highlight-light">{song.author}</h6>
					</div>
					<AudioLinks soundCloud={song.soundcloud} spotify={song.spotify} />
				</div>
				<AudioBar currentTime={currentTime} duration={duration} onClick={changeSongTimePosition} />
				<AudioControls
					className="mt-sm"
					isPlaying={isPlaying}
					togglePlay={togglePlay}
				/>
			</div>
			<audio
				ref={audioRef}
				src={song.songSrc}
				hidden
				onTimeUpdate={handleTimeUpdate}
			/>
		</div>
	)
}
