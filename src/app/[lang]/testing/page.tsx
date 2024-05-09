import { songs } from "@/_data/music"
import { AudioPlayer } from "@/app/_components/AudioPlayer/AudioPlayer"
import { Title } from "@/app/_components/Title"

export default async function Testing() {
	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in">
			<Title>Testing</Title>
			<article className="mt-md max-w-con-min w-full flex flex-col items-center gap-md px-lg">
				<div className="w-full mx-auto flex flex-col items-center justify-center gap-md">
					{songs.map((song) => (
						<AudioPlayer
							key={song.title}
							song={song}
						/>
					))}
				</div>
			</article>
		</main>
	)
}
