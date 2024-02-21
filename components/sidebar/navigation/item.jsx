import Link from "next/link"
export default function NavigationItem({Icon, label, href, active}) {
	return (
		<Link href={href} className={`${active ? "text-white" : ""} flex flex-row h-auto w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`}>
			<Icon size={26}/>
			{label}
		</Link>
	)
}