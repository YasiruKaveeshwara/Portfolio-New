import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { skillCategories, otherSkillCategories } from "@/constants";

const SkillsPage = () => {
	useEffect(() => {
		// Add devicon stylesheet if not already present
		if (!document.querySelector('link[href*="devicon"]')) {
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
			document.head.appendChild(link);
		}
		// Add Font Awesome for other skill icons
		if (!document.querySelector('link[href*="font-awesome"]')) {
			const fa = document.createElement("link");
			fa.rel = "stylesheet";
			fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
			document.head.appendChild(fa);
		}
	}, []);

	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
			<Navigation />
			<main className='pt-32 pb-20'>
				<div className='container px-6'>
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
						<div className='text-center mb-16'>
							<span className='inline-block text-primary font-mono text-sm mb-4'>— Tech Stack</span>
							<h1 className='text-4xl md:text-6xl font-bold mb-6'>
								Skills & <span className='gradient-text'>Technologies</span>
							</h1>
							<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
								A comprehensive toolkit for building modern, scalable applications
							</p>
						</div>
					</motion.div>

					{/* Technical Skills */}
					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{skillCategories.map((category, catIndex) => (
							<motion.div
								key={category.title}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 + catIndex * 0.1, duration: 0.6 }}
								className='glass-card rounded-2xl p-6 hover-glow transition-all duration-500'>
								<h3 className='text-xl font-semibold mb-4 text-primary font-mono'>{category.title}</h3>
								<div className='flex flex-wrap gap-3'>
									{category.skills.map((skill, skillIndex) => (
										<motion.div
											key={skill.name}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ delay: 0.2 + catIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
											className='flex flex-col items-center justify-center px-3 py-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-all duration-300 hover-glow cursor-default group'>
											<i className={`${skill.icon} text-xl mb-2 group-hover:scale-110 transition-transform`} />
											<span className='text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center line-clamp-2'>
												{skill.name}
											</span>
										</motion.div>
									))}
								</div>
							</motion.div>
						))}
					</div>

					{/* Other Skills */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className='mt-20'>
						<h2 className='text-3xl font-bold mb-10 text-center'>
							Other <span className='gradient-text'>Skills</span>
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							{otherSkillCategories.map((category, catIndex) => (
								<motion.div
									key={category.title}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.7 + catIndex * 0.15, duration: 0.6 }}
									className='glass-card rounded-2xl p-6 hover-glow transition-all duration-500'>
									<h3 className='text-xl font-semibold mb-4 text-primary font-mono'>{category.title}</h3>
									<ul className='grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6'>
										{category.skills.map((skill, skillIndex) => (
											<motion.li
												key={skill.name}
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.8 + catIndex * 0.1 + skillIndex * 0.04, duration: 0.3 }}
												className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors group'>
												<i
													className={`${skill.icon} text-base text-primary group-hover:scale-110 transition-transform w-5 text-center`}
												/>
												<span className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
													{skill.name}
												</span>
											</motion.li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default SkillsPage;
