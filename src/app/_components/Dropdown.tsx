"use client"

import { FC, ReactElement, useEffect, useRef, useState } from "react"
import { FaChevronRight } from "react-icons/fa"
import { twMerge } from "tailwind-merge"
import { Button } from "./Button"

interface IDropdownProps {
	position?: "top" | "bottom"
	value: string
	children: ReactElement[]
	className?: string
}

export const Dropdown: FC<IDropdownProps> = ({
	position = "bottom",
	value,
	children,
	className,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div
			ref={dropdownRef}
			className={twMerge(
				"relative inline-block select-none z-[1000]",
				position === "top" ? "origin-bottom" : "origin-top",
				className,
			)}
		>
			<Button onClick={toggleDropdown}>
				{value}
				<FaChevronRight
					className={twMerge(
						"transform transition-transform duration-300",
						isOpen && position === "top"
							? "-rotate-90"
							: isOpen && position === "bottom"
							? "rotate-90"
							: "",
					)}
					size={10}
				/>
			</Button>

			{isOpen && (
				<div
					className={twMerge(
						"absolute left-1/2 transform -translate-x-1/2 min-w-[140px] bg-secondary",
						"before:absolute before:bg-black before:-z-10 before:w-[100%] before:h-[100%] before:translate-x-[-3%] before:translate-y-[-3%] before:overflow-hidden",
						position === "top" ? "bottom-full mb-1" : "top-full mt-1",
					)}
				>
					<ul
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						{children}
					</ul>
				</div>
			)}
		</div>
	)
}
