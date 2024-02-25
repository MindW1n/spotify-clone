const transition = {
	duration: .2,
	ease: "easeOut"
}
export const scaleInOut = {
    initial: {scale: .4, opacity: 0},
    animate: {
        scale: 1, 
        opacity: 1,
		transition
	},
	exit: {
		opacity: 0,
		scale: .4,
		transition
	}
}
export const fadeInOut = {
    initial: {opacity: 0},
    animate: { 
        opacity: .7,
		transition
    },
    exit: { 
        opacity: 0,
		transition
    }
}