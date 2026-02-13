import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { skillCategories } from "../constants";

const Skills = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	useEffect(() => {
		// Add devicon stylesheet if not already present
		if (!document.querySelector('link[href*="devicon"]')) {
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
			document.head.appendChild(link);
		}
	}, []);

	return (
		<section id='skills' className='relative sm:py-16 lg:py-20 overflow-hidden'>
			{/* Background */}
			<div className='absolute left-0 top-0 w-full h-full pointer-events-none'>
				<div className='absolute top-1/2 left-1/4 w-100 h-100 bg-primary/5 rounded-full blur-3xl' />
			</div>

			<div className='container py-10 px-4 sm:px-6' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-10 sm:mb-16'>
					<span className='inline-block text-primary font-mono text-sm mb-4'>— Tech Stack</span>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6'>
						Skills & <span className='gradient-text'>Technologies</span>
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						A comprehensive toolkit for building modern, scalable applications
					</p>
				</motion.div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
					{skillCategories.slice(0, 4).map((category, catIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.2 + catIndex * 0.1, duration: 0.6 }}
							className='glass-card rounded-2xl p-6 hover-glow transition-all duration-500'>
							<h3 className='text-lg font-semibold mb-4 text-primary font-mono'>{category.title}</h3>
							<div className='flex flex-wrap gap-3'>
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={isInView ? { opacity: 1, scale: 1 } : {}}
										transition={{ delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
										className='flex flex-col items-center justify-center px-4 py-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-all duration-300 hover-glow cursor-default group'>
										<i className={`${skill.icon} text-2xl mb-2 group-hover:scale-110 transition-transform`} />
										<span className='text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center line-clamp-2'>
											{skill.name}
										</span>
									</motion.div>
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
			</div>
		</section>
	);
};

export default Skills;
