export default function Section({label, children, onShowAll}) {
	return (
		<section className="w-full h-fit p-4">
			<div className="flex flex-row justify-between">
				<h3 className="font-bold text-2xl">
					{label}
				</h3>
				<button onClick={onShowAll} className="hover:underline text-neutral-400 font-bold text-sm">
					Show all
				</button>
			</div>
			<div className="w-full h-fit flex flex-row">
				{children}
			</div>
		</section>
	)
}