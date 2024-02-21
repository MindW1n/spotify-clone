"use client"
import {HiHome} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"
import {RxCaretLeft, RxCaretRight} from "react-icons/rx"
import IconButton from "./primitives/icon-button"
import LoginModal from "./auth/login-modal"
import {useState} from "react"
export default function Header() {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
	const [loginType, setLoginType] = useState("sign-in")
	return (
		<div className="h-fit bg-gradient-to-b from-emerald-800 p-4 flex flex-row justify-between">
			<div className="hidden md:flex gap-x-2">
				<IconButton>
					<RxCaretLeft size={30} />
				</IconButton>
				<IconButton>
					<RxCaretRight size={30} />
				</IconButton>
			</div>
			<div className="md:hidden flex flex-row gap-x-2">
				<IconButton>
					<HiHome size={40} className="p-2.5" />
				</IconButton>
				<IconButton>
					<BiSearch size={40} className="p-2.5" />
				</IconButton>
			</div>
			<div className="flex flex-row space-x-3">
				<button onClick={() => {setLoginType("sign up"); setIsLoginModalOpen(true)}} className="border border-transparent px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50 text-white font-bold hover:opacity-75 transition">
					Sign up
				</button>
				<button onClick={() => {setLoginType("sign in"); setIsLoginModalOpen(true)}} className="rounded-full bg-white border border-transparent px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition">
					Login
				</button>
			</div>
			<LoginModal
				isOpen={isLoginModalOpen}
				setIsOpen={setIsLoginModalOpen}
				defaultType={loginType}
			/>
		</div>
	)
}