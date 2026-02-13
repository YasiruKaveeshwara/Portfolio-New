import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { educationEntries, certifications } from "../constants";

const Education = () => {
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
						<span className='gradient-text'>Education</span> & Certifications
					</h2>
					<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
						Academic background and professional certifications
					</p>
				</motion.div>

				<div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12'>
					{/* Education */}
					<div>
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

					{/* Certifications */}
					<div>
						{/* <motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='flex items-center gap-3 mb-8'>
							<div className='p-3 rounded-xl bg-primary/10'>
								<Award className='w-6 h-6 text-primary' />
							</div>
							<h3 className='text-2xl font-bold'>Certifications</h3>
						</motion.div>

						<div className='space-y-4'>
							{certifications.map((cert, index) => (
								<motion.div
									key={cert.name}
									initial={{ opacity: 0, y: 20 }}
									animate={isInView ? { opacity: 1, y: 0 } : {}}
									transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
									className='glass-card rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 group'>
									<div className='flex items-start justify-between'>
										<div>
											<h4 className='font-bold text-foreground group-hover:text-primary transition-colors'>
												{cert.name}
											</h4>
											<p className='text-sm text-muted-foreground mt-1'>{cert.issuer}</p>
										</div>
										<span className='px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full'>
											{cert.year}
										</span>
									</div>
								</motion.div>
							))}
						</div> */}

						{/* Stats card */}
						{/* <motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.6, delay: 0.7 }}
							className='glass-card rounded-2xl p-6 mt-8 glow'>
							<h4 className='font-bold text-lg mb-4'>Continuous Learning</h4>
							<div className='grid grid-cols-2 gap-4'>
								<div className='text-center p-4 rounded-xl bg-secondary'>
									<div className='text-3xl font-bold gradient-text'>15+</div>
									<div className='text-sm text-muted-foreground'>Online Courses</div>
								</div>
								<div className='text-center p-4 rounded-xl bg-secondary'>
									<div className='text-3xl font-bold gradient-text'>50+</div>
									<div className='text-sm text-muted-foreground'>Tech Articles Read</div>
								</div>
							</div>
						</motion.div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
