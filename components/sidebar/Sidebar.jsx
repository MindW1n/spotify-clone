import Navigation from "./navigation/Navigation"
import Library from "./Library"
export default function Sidebar() {
	return (
		<div className="flex h-full">
			<div className="hidden md:flex flex-col gap-y-2 h-full w-[300px] p-2">
				<Navigation />
				<Library />
			</div>
		</div>
	)
}