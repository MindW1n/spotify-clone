import Sidebar from "@/components/sidebar/main"
import Header from "@/components/header"
import "./globals.css"
export const metadata = {title: "Spotify Clone"}
import {Figtree} from "next/font/google"
const font = Figtree({subsets: ["latin-ext"]})
export default function RootLayout({children}) {
	return (
		<html lang="en" className={font.className}>
			<body className={"flex flex-row"}>
				<Sidebar />
				<div className="w-full py-2 md:pr-2">
					<div className="bg-neutral-900 rounded-xl w-full h-full overflow-hidden">
						<Header />
						<main className="w-full h-full">
							{children}
						</main>
					</div>
				</div>
			</body>
		</html>
	)
}