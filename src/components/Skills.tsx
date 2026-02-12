import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { skillCategories } from "../constants";

const Skills = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id='skills' className='relative py-32 overflow-hidden'>
			{/* Background */}
			<div className='absolute left-0 top-0 w-full h-full'>
				<div className='absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl' />
			</div>

			<div className='container px-6' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'>
					<span className='inline-block text-primary font-mono text-sm mb-4'>— Tech Stack</span>
					<h2 className='text-4xl md:text-5xl font-bold mb-6'>
						Skills & <span className='gradient-text'>Technologies</span>
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						A comprehensive toolkit for building modern, scalable applications
					</p>
				</motion.div>

				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{skillCategories.map((category, catIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.2 + catIndex * 0.1, duration: 0.6 }}
							className='glass-card rounded-2xl p-6 hover-glow transition-all duration-500'>
							<h3 className='text-lg font-semibold mb-4 text-primary font-mono'>{category.title}</h3>
							<div className='flex flex-wrap gap-2'>
								{category.skills.map((skill, skillIndex) => (
									<motion.span
										key={skill}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={isInView ? { opacity: 1, scale: 1 } : {}}
										transition={{ delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
										className='px-3 py-1.5 text-sm bg-secondary rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors cursor-default'>
										{skill}
									</motion.span>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Show More Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.8, duration: 0.6 }}
					className='text-center mt-12'>
					<Link
						to='/skills'
						className='inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all group'>
						View All Skills
						<ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
					</Link>
				</motion.div>

				{/* Animated tech line */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={isInView ? { scaleX: 1 } : {}}
					transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
					className='mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent'
				/>
			</div>
		</section>
	);
};

export default Skills;
