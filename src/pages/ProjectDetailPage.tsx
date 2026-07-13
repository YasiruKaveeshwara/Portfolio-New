import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug } from "@/constants";

const ProjectDetailPage = () => {
	const { slug } = useParams<{ slug: string }>();
	const project = slug ? getProjectBySlug(slug) : undefined;

	if (!project) {
		return (
			<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
				<Navigation />
				<main className='pt-32 pb-20'>
					<div className='container px-6 text-center'>
						<h1 className='text-4xl font-bold mb-4'>Project Not Found</h1>
						<p className='text-muted-foreground mb-8'>The project you're looking for doesn't exist.</p>
						<Link
							to='/projects'
							className='inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all'>
							<ArrowLeft className='w-4 h-4' />
							Back to Projects
						</Link>
					</div>
				</main>
				<Footer />
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
			<Navigation />
			<main className='pt-32 pb-20'>
				<div className='container px-6'>
					{/* Back button */}
					<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
						<Link
							to='/projects'
							className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group'>
							<ArrowLeft className='w-4 h-4 transition-transform group-hover:-translate-x-1' />
							Back to Projects
						</Link>
					</motion.div>

					<div className='max-w-5xl mx-auto'>
						{/* Hero media */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1, duration: 0.6 }}
							className='rounded-2xl overflow-hidden glass-card mb-10'>
							{project.video ?
								<video
									src={project.video}
									poster={project.image}
									autoPlay
									muted
									loop
									playsInline
									className='w-full aspect-video object-cover'
								/>
							:	<img
									src={project.image}
									alt={project.title}
									className={`w-full object-cover ${project.mobile ? "aspect-9/16 max-h-[600px] mx-auto" : "aspect-video"}`}
								/>
							}
						</motion.div>

						{/* Title & links */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className='mb-8'>
							<h1 className='text-4xl md:text-5xl font-bold mb-4'>{project.title}</h1>

							<div className='flex flex-wrap items-center gap-3 mb-6'>
								{project.link && (
									<a
										href={project.link}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all hover:scale-105'
										aria-label={`Visit ${project.title} live demo`}>
										<ExternalLink className='w-4 h-4' />
										Live Demo
									</a>
								)}
								{project.github && (
									<a
										href={project.github}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-all hover:scale-105'
										aria-label={`View ${project.title} source code on GitHub`}>
										<Github className='w-4 h-4' />
										View Code
									</a>
								)}
							</div>
						</motion.div>

						{/* Tags */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							className='mb-10'>
							<h2 className='text-sm font-mono text-primary mb-3'>Tech Stack</h2>
							<div className='flex flex-wrap gap-2'>
								{project.tags.map((tag) => (
									<span
										key={tag}
										className='px-4 py-2 text-sm font-mono bg-secondary text-secondary-foreground rounded-lg'>
										{tag}
									</span>
								))}
							</div>
						</motion.div>

						{/* Long description */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className='glass-card rounded-2xl p-8 mb-10'>
							<h2 className='text-2xl font-bold mb-6'>About This Project</h2>
							<div className='space-y-4 text-muted-foreground leading-relaxed'>
								{project.longDescription.split("\n\n").map((paragraph, i) => (
									<p key={i}>{paragraph}</p>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default ProjectDetailPage;
