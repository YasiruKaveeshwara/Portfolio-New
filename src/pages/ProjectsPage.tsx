import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getWebProjects, getMobileProjects, getFeaturedProjects } from "@/constants";

const ProjectsPage = () => {
	const webProjects = getWebProjects();
	const mobileProjects = getMobileProjects();

	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
			<Navigation />
			<main className='pt-32 pb-20'>
				<div className='container px-6'>
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
						<div className='text-center mb-16'>
							<span className='inline-block text-primary font-mono text-sm mb-4'>— Portfolio</span>
							<h1 className='text-4xl md:text-6xl font-bold mb-6'>
								All <span className='gradient-text'>Projects</span>
							</h1>
							<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
								A comprehensive showcase of my work, spanning web applications, mobile apps, and developer tools
							</p>
						</div>
					</motion.div>

					{/* Featured Projects */}
					{getFeaturedProjects().length > 0 && (
						<div className='mb-16'>
							<h2 className='text-2xl font-bold mb-8'>
								Featured <span className='text-primary'>Projects</span>
							</h2>
							<div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-6'>
								{getFeaturedProjects().map((project, i) => (
									<motion.article
										key={project.title}
										initial={{ opacity: 0, y: 40 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
										className='group relative overflow-hidden rounded-2xl glass-card hover-glow'>
										<div className='aspect-video overflow-hidden'>
											<img
												src={project.image}
												alt={project.title}
												className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
											/>
											<div className='absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent' />
										</div>

										<div className='absolute bottom-0 left-0 right-0 p-6'>
											<div className='flex flex-wrap gap-2 mb-3'>
												{project.tags.map((tag) => (
													<span key={tag} className='text-xs font-mono px-2 py-1 bg-primary/20 text-primary rounded'>
														{tag}
													</span>
												))}
											</div>

											<h3 className='text-2xl font-bold mb-2 group-hover:text-primary transition-colors'>
												{project.title}
											</h3>
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
						</div>
					)}

					{/* Web Applications */}
					{webProjects.length > 0 && (
						<div className='mb-16'>
							<h2 className='text-2xl font-bold mb-8'>
								Web <span className='text-primary'>Applications</span>
							</h2>
							<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
								{webProjects.map((project, i) => (
									<motion.article
										key={project.title}
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
										className='group p-6 glass-card rounded-2xl hover-glow transition-all duration-500'>
										<div className='aspect-video overflow-hidden rounded-lg mb-4'>
											<img
												src={project.image}
												alt={project.title}
												className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
											/>
										</div>

										<div className='flex items-start justify-between mb-4'>
											<div className='flex flex-wrap gap-2'>
												{project.tags.slice(0, 3).map((tag: string) => (
													<span
														key={tag}
														className='text-xs font-mono px-2 py-1 bg-secondary text-muted-foreground rounded'>
														{tag}
													</span>
												))}
											</div>
											<div className='flex items-center gap-2'>
												<a href={project.github} className='p-2 hover:text-primary transition-colors'>
													<Github className='w-5 h-5' />
												</a>
												<a href={project.link} className='p-2 hover:text-primary transition-colors'>
													<ExternalLink className='w-5 h-5' />
												</a>
											</div>
										</div>

										<h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>
											{project.title}
										</h3>
										<p className='text-muted-foreground text-sm'>{project.description}</p>
									</motion.article>
								))}
							</div>
						</div>
					)}

					{/* Mobile Apps */}
					{mobileProjects.length > 0 && (
						<div className='mb-16'>
							<h2 className='text-2xl font-bold mb-8'>
								Mobile <span className='text-primary'>Apps</span>
							</h2>
							<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
								{mobileProjects.map((project, i) => (
									<motion.article
										key={project.title}
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
										className='group p-6 glass-card rounded-2xl hover-glow transition-all duration-500'>
										<div className='aspect-video overflow-hidden rounded-lg mb-4'>
											<img
												src={project.image}
												alt={project.title}
												className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
											/>
										</div>

										<div className='flex items-start justify-between mb-4'>
											<div className='flex flex-wrap gap-2'>
												{project.tags.slice(0, 3).map((tag: string) => (
													<span
														key={tag}
														className='text-xs font-mono px-2 py-1 bg-secondary text-muted-foreground rounded'>
														{tag}
													</span>
												))}
											</div>
											<div className='flex items-center gap-2'>
												<a href={project.github} className='p-2 hover:text-primary transition-colors'>
													<Github className='w-5 h-5' />
												</a>
												<a href={project.link} className='p-2 hover:text-primary transition-colors'>
													<ExternalLink className='w-5 h-5' />
												</a>
											</div>
										</div>

										<h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>
											{project.title}
										</h3>
										<p className='text-muted-foreground text-sm'>{project.description}</p>
									</motion.article>
								))}
							</div>
						</div>
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default ProjectsPage;
