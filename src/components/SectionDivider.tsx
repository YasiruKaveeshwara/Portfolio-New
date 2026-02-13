import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionDivider = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	return (
		<div ref={ref} className='container px-4 sm:px-6 py-0'>
			<motion.div
				initial={{ scaleX: 0 }}
				animate={isInView ? { scaleX: 1 } : {}}
				transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
				className='h-px bg-linear-to-r from-transparent via-primary/50 to-transparent'
			/>
		</div>
	);
};

export default SectionDivider;
