import Link from "next/link"
export default function Card({image, label, description, href}) {
	return (
		<Link href={"" && href} className="flex flex-col justify-between space-y-2 bg-neutral-800 w-44 h-64 rounded-lg p-4 transition-colors hover:bg-neutral-700 duration-300">
			<div className="flex items-center h-full">
				<img src={image} alt="label" className="rounded-md" />
			</div>
			<div className="flex flex-col space-y-2">
				<h3 className="text-sm font-bold truncate">{label}</h3>
				<p className="text-sm font-medium truncate">{description}</p>
			</div>
		</Link>
	)
}