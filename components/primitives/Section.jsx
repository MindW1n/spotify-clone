import Link from "next/link"
export default function Section({label, children, href}) {
	return (
		<section className="w-full h-fit p-4">
			<div className="flex flex-row justify-between">
				<h3 className="font-bold text-2xl">
					{label}
				</h3>
				<Link href={"" && href} className="hover:underline text-neutral-400 font-bold text-sm">
					Show all
				</Link>
			</div>
			<div className="w-full h-fit flex flex-row p-5 space-x-4">
				{children}
			</div>
		</section>
	)
}