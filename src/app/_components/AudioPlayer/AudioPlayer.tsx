"use client"

import { useLocale } from "@/app/_contexts/locale-context"
import { useMusic } from "@/app/_contexts/music-context"
import { reconvertDuration } from "@/app/_utils"
import { FC, useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { IAudioPlayerProps } from "./AudioPlayer.types"
import { AudioBar } from "./_components/AudioBar"
import { AudioControls } from "./_components/AudioControls"
import { AudioImage } from "./_components/AudioImage"
import { AudioLinks } from "./_components/AudioLinks"

export const AudioPlayer: FC<IAudioPlayerProps> = ({ song, className }) => {
	const { dictionary: d } = useLocale()
	const { contextSong, changeContextSong } = useMusic()
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [duration, setDuration] = useState<number>(0)
	const [currentTime, setCurrentTime] = useState<number>(0)

	useEffect(() => {
		const handleTimeUpdate = () => {
			if (!audioRef.current) {
				return
			}
			const time = parseFloat(audioRef.current.currentTime.toFixed(2))
			setCurrentTime(time)
		}

		const handleAudioEnd = () => {
			setCurrentTime(0)
			setIsPlaying(false)
		}

		const handleLoadStart = () => {
			setIsLoading(true)
		}

		const handleLoadedMetadata = () => {
			setIsLoading(false)
		}

		audioRef.current?.addEventListener("timeupdate", handleTimeUpdate)
		audioRef.current?.addEventListener("ended", handleAudioEnd)
		audioRef.current?.addEventListener("loadstart", handleLoadStart)
		audioRef.current?.addEventListener("loadedmetadata", handleLoadedMetadata)

		return () => {
			audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate)
			audioRef.current?.removeEventListener("ended", handleAudioEnd)
			audioRef.current?.removeEventListener("loadstart", handleLoadStart)
			audioRef.current?.removeEventListener(
				"loadedmetadata",
				handleLoadedMetadata,
			)
		}
	}, [])

	const play = () => {
		setIsPlaying(true)
	}

	const pause = () => {
		setIsPlaying(false)
	}

	const togglePlay = () => {
		setIsPlaying(!isPlaying)
	}

	const changeSongTimePosition = (position: number) => {
		if (!audioRef.current) {
			return
		}
		audioRef.current.currentTime = position * duration
	}

	useEffect(() => {
		if (isPlaying) {
			if (!contextSong || song.id !== contextSong.id) {
				changeContextSong(song)
			}
			audioRef.current?.play()
		} else {
			audioRef.current?.pause()
		}
	}, [isPlaying])

	useEffect(() => {
		if (contextSong && contextSong.id !== song.id) {
			setIsPlaying(false)
		}
	}, [contextSong])

	useEffect(() => {
		setDuration(reconvertDuration(song.length))
	}, [])

	return (
		<div
			className={twMerge(
				"relative w-full bg-black/60 border border-secondary rounded-md backdrop-blur p-md grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-sm sm:gap-md",
				className,
			)}
		>
			<AudioImage
				isPlaying={isPlaying}
				src={song.imageSrc}
				alt={song.title}
				onClick={togglePlay}
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
			/>
		</div>
	)
}
