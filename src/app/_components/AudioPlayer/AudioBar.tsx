"use client"

import { formatDuration } from "@/_utils"
import { FC, useEffect, useRef, useState } from "react"
import { IAudioBarProps } from "./AudioPlayer.types"

export const AudioBar: FC<IAudioBarProps> = ({ currentTime, duration, onClick }) => {
	const barRef = useRef<HTMLDivElement | null>(null)
	const songProgress = (currentTime / duration) * 100
	const [isDragging, setIsDragging] = useState<boolean>(false)

	useEffect(() => {
		const handlePointerUp = () => {
			if (isDragging) {
				setIsDragging(false)
			}
		}

		const handlePointerMove = (event: PointerEvent) => {
			if (!isDragging || !barRef.current) {
				return
			}
			event.preventDefault()
			const barRect = barRef.current.getBoundingClientRect()
			const newPosition = (event.clientX - barRect.left) / barRect.width
			const currentProgress = Math.min(1, Math.max(0, newPosition))

			onClick(currentProgress)
		}

		window.addEventListener("pointerup", handlePointerUp)
		window.addEventListener("pointermove", handlePointerMove)

		return () => {
			window.removeEventListener("pointerup", handlePointerUp)
			window.removeEventListener("pointermove", handlePointerMove)
		}
	}, [isDragging, onClick])

	const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
		if (!barRef.current) {
			return
		}
		setIsDragging(true)
		const width = barRef.current.clientWidth
		const offset = event.nativeEvent.offsetX
		const currentProgress = offset / width

		onClick(currentProgress)
	}

	return (
		<div className="mt-auto flex items-end">
			<div
				ref={barRef}
				className="relative w-full rounded-full h-[8px] bg-gray-900 cursor-pointer hover:bg-gray-600 transition-all"
				onPointerDown={handlePointerDown}
			>
				<div
					className="absolute left-0 rounded-full h-[8px] bg-tertiary"
					style={{ width: `${songProgress}%` }}
				/>
			</div>
			<div className="text-sm text-gray-200 -mb-[6px] ml-sm">{formatDuration(duration)}</div>
		</div>
	)
}
