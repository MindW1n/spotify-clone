import Card from "@/components/primitives/Card"
import Section from "@/components/primitives/Section"
export default function Home() {
	return (
		<>
			<Section label="Recently played">
				<Card
					image="/spotify.png"
					label="Spotify"
					description="Really impressive music application blablablablablablablablablablablablablablablablablablablabla"
				/>
			</Section>
			<Section label="To get you started">
			</Section>
			<Section label="Featured Charts">
			</Section>
			<Section label="Episodes for you">
			</Section>
		</>
	)
}