"use client"

import Image from "next/image"

import { FC } from "react"
import { twMerge } from "tailwind-merge"
import { ExternalLink } from "./ExternalLink"
import { Tooltip } from "./Tooltip"

interface IIconLinkProps {
	title: string
	link: string
	imgSrc: string
	width?: number
	height?: number
	className?: string
	iconClassName?: string
}

export const IconLink: FC<IIconLinkProps> = ({
	title,
	link,
	imgSrc,
	width = 30,
	height = 30,
	className,
	iconClassName,
}) => (
	<Tooltip content={title}>
		<ExternalLink
			key={title}
			className={twMerge("block hover:scale-125", className)}
			to={link}
		>
			<Image
				className={iconClassName}
				src={imgSrc}
				alt={title}
				width={width}
				height={height}
				priority
			/>
		</ExternalLink>
	</Tooltip>
)
