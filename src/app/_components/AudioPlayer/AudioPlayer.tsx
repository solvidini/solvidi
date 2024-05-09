"use client"
import Image from "next/image"

import { useLocale } from "@/app/_contexts/locale-context"
import { useMusic } from "@/app/_contexts/music-context"
import { reconvertDuration } from "@/app/_utils"
import { FC, useCallback, useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { AudioBar } from "./AudioBar"
import { AudioControls } from "./AudioControls"
import { AudioLinks } from "./AudioLinks"
import { IAudioPlayerProps } from "./AudioPlayer.types"

export const AudioPlayer: FC<IAudioPlayerProps> = ({ song, className }) => {
	const { currentSong, setSong } = useMusic()
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
		const audioElement = audioRef.current
		if (!audioElement) {
			return
		}
		audioElement.addEventListener("ended", handleAudioEnd)

		return () => {
			audioElement.removeEventListener("ended", handleAudioEnd)
		}
	}, [handleAudioEnd])

	useEffect(() => {
		setDuration(audioRef.current?.duration || reconvertDuration(song.length))
	}, [])

	useEffect(() => {
		if (isPlaying) {
			if (!currentSong || song.id !== currentSong.id) {
				setSong(song)
			}
			audioRef.current?.play()
		} else {
			audioRef.current?.pause()
		}
	}, [isPlaying])

	useEffect(() => {
		if (currentSong && currentSong.id !== song.id) {
			setIsPlaying(false)
		}
	}, [currentSong])

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
				"relative w-full bg-black/70 border border-secondary rounded-md backdrop-blur p-md grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-md",
				className,
			)}
		>
			<Image
				className="select-none my-auto w-[120px] h-[120px] rounded-md transition-all hover:scale-[1.1] hover:brightness-[1.2] cursor-pointer"
				src={song.imageSrc}
				alt={song.title}
				onClick={togglePlay}
				width={120}
				height={120}
			/>
			<div className="flex flex-col">
				<div className="flex justify-between items-start flex-row gap-sm">
					<div className="flex flex-col">
						<h6 className="font-semibold">{song.title}</h6>
						<h6 className="text-highlight-light">{song.author}</h6>
					</div>
					<AudioLinks
						soundCloud={song.soundcloud}
						spotify={song.spotify}
						className="ml-auto absolute top-md right-md sm:relative sm:top-0 sm:right-0"
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
					info={song.preview ? d.music.preview : false}
					togglePlay={togglePlay}
				/>
			</div>
			<audio
				ref={audioRef}
				src={song.songSrc}
				preload="metadata"
				onTimeUpdate={handleTimeUpdate}
				onLoadStart={() => setIsLoading(true)}
				onLoadedMetadata={() => setIsLoading(false)}
			/>
		</div>
	)
}
