import { ReactNode } from "react"

export async function generateMetadata() {
	return {
		title: "Solvidi - Testing",
		description: "Testing",
	}
}

export default function Layout({ children }: { children: ReactNode }) {
	return <>{children}</>
}
