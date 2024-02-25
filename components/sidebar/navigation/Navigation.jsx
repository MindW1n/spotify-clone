"use client"
import {HiHome} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"
import {usePathname} from "next/navigation"
import {useMemo} from "react"
import NavigationItem from "./NavigationItem"
export default function Navigation() {
	const path = usePathname()
	const routes = useMemo(() => {
		const routes = {
			"/": {Icon: HiHome, label: "Home"},
			"/search": {Icon: BiSearch, label: "Search"}
		}
		if(routes[path]) routes[path].active = true
		return routes
	}, [path])
	return (
		<div className="w-full bg-neutral-900 rounded-xl px-5 py-4 gap-y-4 flex flex-col">
			{
				Object.entries(routes).map(route => (
					<NavigationItem key={route[1].label} href={route[0]} {...route[1]} />
				))
			}
		</div>
	)
}