import Sidebar from "@/components/sidebar/Sidebar"
import Header from "@/components/Header"
import "./globals.css"
import {Toaster} from "react-hot-toast"
export const metadata = {title: "Spotify Clone"}
export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body className={"flex flex-row"}>
				<Sidebar />
				<div className="w-full py-2 md:pr-2">
					<div className="bg-neutral-900 rounded-xl w-full h-full overflow-hidden">
						<Header />
						<main className="flex flex-col overflow-auto no-scrollbar w-full h-full">
							{children}
						</main>
					</div>
				</div>
				<Toaster />
			</body>
		</html>
	)
}