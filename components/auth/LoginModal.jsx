"use client"
import {RxCross2} from "react-icons/rx"
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"
import {AnimatePresence, motion} from "framer-motion"
import IconButton from "../primitives/IconButton"
import {useMemo} from "react"
import {fadeInOut, scaleInOut} from "@/tools/animations"
export default function LoginModal({isOpen, setIsOpen, defaultType}) {
	const type = useMemo(() => defaultType, [defaultType])
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div {...fadeInOut} className="fixed top-0 left-0 w-screen h-screen opacity-50 bg-black"/>
					<div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
						<div onClick={() => setIsOpen(false)} className="w-full h-full z-[1]"/>
						<motion.div {...scaleInOut} className="w-80 max-h-96 absolute rounded-3xl bg-neutral-800 shadow-xl p-4 opacity-100 z-[2] overflow-y-auto no-scrollbar">
							<div className="flex flex-col">
								<div className="flex flex-row justify-between">
									<h3 className="text-2xl font-extrabold text-white ml-5">
										{defaultType.charAt(0).toUpperCase() + defaultType.slice(1)}
									</h3>
									<IconButton onClick={() => setIsOpen(false)}>
										<RxCross2 size={30} />
									</IconButton>
								</div>
							</div>
							{
								type == "sign in" ? <SignInForm />
								: type == "sign up" ? <SignUpForm />
						 		: <></>
							}
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	)
}