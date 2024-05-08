"use client"
import Image from "next/image"

import { useLocale } from "@/app/_contexts/locale-context"
import { FC, useCallback, useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { AudioBar } from "./AudioBar"
import { AudioControls } from "./AudioControls"
import { AudioLinks } from "./AudioLinks"
import { IAudioPlayerProps } from "./AudioPlayer.types"

export const AudioPlayer: FC<IAudioPlayerProps> = ({ song, className }) => {
	const { dictionary: d } = useLocale()
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [duration, setDuration] = useState<number>(0)
	const [currentTime, setCurrentTime] = useState<number>(0)

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
		if (!audioRef.current || isLoading) {
			return
		}

		setDuration(audioRef.current.duration)
	}, [isLoading])

	useEffect(() => {
		if (!audioRef.current) {
			return
		}

		audioRef.current?.addEventListener("ended", handleAudioEnd)

		return () => {
			audioRef.current?.removeEventListener("ended", handleAudioEnd)
		}
	}, [audioRef.current, handleAudioEnd])

	useEffect(() => {
		if (isPlaying) {
			audioRef.current?.play()
		} else {
			audioRef.current?.pause()
		}
	}, [isPlaying])

	const play = () => {
		setIsPlaying(true)
	}

	const pause = () => {
		setIsPlaying(false)
	}

	const togglePlay = () => {
		setIsPlaying(!isPlaying)
	}

	return (
		<div
			className={twMerge(
				"relative w-full bg-black/70 border border-secondary rounded-md backdrop-blur p-md grid grid-cols-[auto,1fr] gap-md",
				className,
			)}
		>
			<Image
				className="my-auto w-[120px] h-[120px] rounded-md transition-all hover:scale-[1.1] hover:brightness-[1.2] cursor-pointer"
				src={song.imageSrc}
				alt={song.title}
				onClick={togglePlay}
				width={120}
				height={120}
			/>
			<div className="relative w-full h-full flex flex-col">
				<div className="flex justify-between items-start flex-col-reverse xs:flex-row gap-sm">
					<div className="flex flex-col">
						<h6 className="font-semibold">{song.title}</h6>
						<h6 className="text-highlight-light">{song.author}</h6>
					</div>
					<AudioLinks
						soundCloud={song.soundcloud}
						spotify={song.spotify}
						className="ml-auto"
					/>
				</div>
				<AudioBar
					currentTime={currentTime}
					duration={duration}
					length={song.length}
					positionUpdate={changeSongTimePosition}
					playSong={play}
					pauseSong={pause}
				/>
				<AudioControls
					className="mt-sm"
					isPlaying={isPlaying}
					isLoading={isLoading}
					togglePlay={togglePlay}
				/>
				{song.preview && (
					<div className="absolute right-0 bottom-0 uppercase text-xs bg-highlight rounded-md py-xxs px-xs text-white font-semibold">
						{d.music.preview}
					</div>
				)}
			</div>
			<audio
				ref={audioRef}
				src={song.songSrc}
				preload="metadata"
				hidden
				onTimeUpdate={handleTimeUpdate}
				onLoadStart={() => setIsLoading(true)}
				onLoadedData={() => setIsLoading(false)}
			/>
		</div>
	)
}
