import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "../constants";

const Experience = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id='experience' className='py-10 sm:py-16 lg:py-20 relative'>
			<div className='absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent' />

			<div className='container px-4 sm:px-6 relative z-10'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='text-center mb-10 sm:mb-16'>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
						Work <span className='gradient-text'>Experience</span>
					</h2>
					<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
						My professional journey in software development
					</p>
				</motion.div>

				<div className='max-w-4xl mx-auto relative'>
					{/* Timeline line */}
					<div className='absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2' />

					{experiences.map((exp, index) => (
						<motion.div
							key={exp.title}
							initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className={`relative flex items-start gap-8 mb-12 ${
								index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
							}`}>
							{/* Timeline node */}
							<div className='absolute left-4 sm:left-8 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full md:-translate-x-1/2 ring-4 ring-background z-10' />

							{/* Content card */}
							<div
								className={`ml-12 sm:ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
								<div className='glass-card rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 group'>
									<div className='flex items-center gap-2 text-primary mb-2'>
										<Calendar className='w-4 h-4' />
										<span className='text-sm font-mono'>{exp.period}</span>
									</div>

									<h3 className='text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors'>
										{exp.title}
									</h3>

									<div className='flex items-center gap-2 text-muted-foreground mb-4'>
										<Briefcase className='w-4 h-4' />
										<span>{exp.company}</span>
									</div>

									<p className='text-muted-foreground text-sm mb-4'>{exp.description}</p>

									<div className='flex flex-wrap gap-2'>
										{exp.technologies.map((tech) => (
											<span key={tech} className='px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full'>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
