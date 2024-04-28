import { ButtonHTMLAttributes, FC } from "react"
import {
	FaChevronDown,
	FaChevronLeft,
	FaChevronRight,
	FaChevronUp,
} from "react-icons/fa"

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	position: "up" | "right" | "down" | "left"
}

export const ArrowButton: FC<ArrowButtonProps> = ({
	position,
	className,
	...props
}) => {
	const renderArrow = () => {
		switch (position) {
			case "up":
				return (
					<FaChevronUp
						size={40}
						className="text-primary"
					/>
				)
			case "right":
				return (
					<FaChevronRight
						size={40}
						className="text-primary"
					/>
				)
			case "down":
				return (
					<FaChevronDown
						size={40}
						className="text-primary"
					/>
				)
			case "left":
			default:
				return (
					<FaChevronLeft
						size={40}
						className="text-primary"
					/>
				)
		}
	}

	return (
		<button
			type="button"
			{...props}
			className={className}>
			{renderArrow()}
		</button>
	)
}
