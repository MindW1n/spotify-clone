import {TbPlaylist} from "react-icons/tb"
import {AiOutlinePlus} from "react-icons/ai"
export default function Library() {
	return (
		<div className="flex flex-col w-full bg-neutral-900 rounded-xl overflow-auto h-full">
			<div className="flex flex-row px-5 pt-4 justify-between">
				<div className="flex flex-row gap-x-4">
					<TbPlaylist size={26} className="text-neutral-400"/>
					<p className="text-md font-medium text-neutral-400">Your Library</p>
				</div>
				<AiOutlinePlus size={20} className="text-neutral-400 cursor-pointer hover:text-white transition"/>
			</div>
			<div className="flex flex-col pt-4 px-3 gap-y-2">
				
			</div>
		</div>
	)
}