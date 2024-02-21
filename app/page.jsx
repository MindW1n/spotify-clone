import Section from "@/components/primitives/section";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Section label="Recently played" />
			<Section label="To get you started" />
			<Section label="Featured Charts" />	
			<Section label="Episodes for you" />
		</div>
	)
}