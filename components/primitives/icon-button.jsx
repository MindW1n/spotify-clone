export default function IconButton({onClick, children, className}) {
	return (
		<button onClick={onClick} className={`${className ? (className + " ") : ""}text-neutral-400 rounded-full bg-black hover:text-white transition opacity-75 hover:opacity-100 h-fit`}>
			{children}
		</button>
	)
}