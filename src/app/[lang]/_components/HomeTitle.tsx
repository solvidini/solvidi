"use client"

import { breakpoints } from "@/_config"
import { Speaker } from "@/app/_components/Speaker"
import { useEffect, useState } from "react"
import { Loader } from "./Loader"

export const HomeTitle = () => {
	const [speakersNumber, setSpeakersNumber] = useState(0)

	const handleResize = () => {
		if (!window) {
			return
		}

		const width = window.innerWidth

		if (width > parseInt(breakpoints.lg)) {
			setSpeakersNumber(3)
		} else if (
			width <= parseInt(breakpoints.lg) &&
			width > parseInt(breakpoints.md)
		) {
			setSpeakersNumber(2)
		} else {
			setSpeakersNumber(1)
		}
	}

	useEffect(() => {
		if (!window) {
			return
		}

		handleResize()
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<div className="w-full max-w-con flex justify-between p-md sm:p-lg items-center gap-md">
			{[...Array(speakersNumber)].map((_, index) => (
				<Speaker
					key={`left-speaker-${index}`}
					className="scale-[0.8] sm:scale-100"
				/>
			))}
			{speakersNumber === 0 && (
				<Loader className="w-[100px] h-[100px] flex items-center justify-center" />
			)}
			<h1 className="text-[20px] sm:text-[32px] tracking-[10px]">SOLVIDI</h1>
			{speakersNumber === 0 && (
				<Loader className="w-[100px] h-[100px] flex items-center justify-center" />
			)}
			{[...Array(speakersNumber)].map((_, index) => (
				<Speaker
					key={`right-speaker-${index}`}
					className="scale-[0.8] sm:scale-100"
				/>
			))}
		</div>
	)
}
