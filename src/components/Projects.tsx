import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../constants";

const Projects = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id='projects' className='relative py-32 overflow-hidden'>
			{/* Background */}
			<div className='absolute right-0 bottom-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl' />

			<div className='container px-6' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'>
					<span className='inline-block text-primary font-mono text-sm mb-4'>— Featured Work</span>
					<h2 className='text-4xl md:text-5xl font-bold mb-6'>
						Selected <span className='gradient-text'>Projects</span>
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						A showcase of my recent work, spanning web applications, developer tools, and more
					</p>
				</motion.div>

				{/* Featured projects */}
				<div className='grid lg:grid-cols-2 gap-6 mb-8'>
					{getFeaturedProjects().map((project, i) => (
						<motion.article
							key={project.title}
							initial={{ opacity: 0, y: 40 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
							className='group relative overflow-hidden rounded-2xl glass-card hover-glow'>
							<div className='aspect-video overflow-hidden'>
								<img
									src={project.image}
									alt={project.title}
									className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent' />
							</div>

							<div className='absolute bottom-0 left-0 right-0 p-6'>
								<div className='flex flex-wrap gap-2 mb-3'>
									{project.tags.map((tag) => (
										<span key={tag} className='text-xs font-mono px-2 py-1 bg-primary/20 text-primary rounded'>
											{tag}
										</span>
									))}
								</div>

								<h3 className='text-2xl font-bold mb-2 group-hover:text-primary transition-colors'>{project.title}</h3>
								<p className='text-muted-foreground text-sm mb-4 line-clamp-2'>{project.description}</p>

								<div className='flex items-center gap-3'>
									<a
										href={project.link}
										className='inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline'>
										Live Demo <ArrowUpRight className='w-4 h-4' />
									</a>
									<a
										href={project.github}
										className='inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground'>
										<Github className='w-4 h-4' /> Code
									</a>
								</div>
							</div>
						</motion.article>
					))}
				</div>

				{/* Show More Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.6, duration: 0.6 }}
					className='text-center'>
					<Link
						to='/projects'
						className='inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all group'>
						View All Projects
						<ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
