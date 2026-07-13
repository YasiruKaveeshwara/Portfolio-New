import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { educationEntries } from "../constants";

const Education = React.memo(() => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id='education' className='py-10 sm:py-16 lg:py-20 relative'>
			<div className='container px-4 sm:px-6 relative z-10'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='text-center mb-10 sm:mb-16'>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
						<span className='gradient-text'>Education</span>
					</h2>
					<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
						Academic background and qualifications
					</p>
				</motion.div>

				<div className='max-w-3xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='flex items-center gap-3 mb-8'>
						<div className='p-3 rounded-xl bg-primary/10'>
							<GraduationCap className='w-6 h-6 text-primary' />
						</div>
						<h3 className='text-2xl font-bold'>Academic Background</h3>
					</motion.div>

					<div className='space-y-6'>
						{educationEntries.map((edu, index) => (
							<motion.div
								key={edu.degree}
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
								className='relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors'>
								<div className='absolute left-0 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1.75' />

								<div className='glass-card rounded-2xl p-6'>
									<span className='text-sm font-mono text-primary'>{edu.period}</span>
									<h4 className='text-lg font-bold text-foreground mt-1'>{edu.degree}</h4>
									<p className='text-muted-foreground flex items-center gap-2 mt-1'>
										<BookOpen className='w-4 h-4' />
										{edu.institution}
									</p>
									<p className='text-sm text-muted-foreground mt-3'>{edu.description}</p>

									<div className='flex flex-wrap gap-2 mt-4'>
										{edu.achievements.map((achievement) => (
											<span
												key={achievement}
												className='inline-flex items-center gap-1 px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full'>
												<Award className='w-3 h-3' />
												{achievement}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
});

export default Education;
