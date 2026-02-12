import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { skillCategories } from "@/constants";

const SkillsPage = () => {
	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
			<Navigation />
			<main className='pt-32 pb-20'>
				<div className='container px-6'>
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
						<Link
							to='/'
							className='inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8'>
							<ArrowLeft className='w-4 h-4' />
							Back to Home
						</Link>

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

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{skillCategories.map((category, catIndex) => (
							<motion.div
								key={category.title}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 + catIndex * 0.1, duration: 0.6 }}
								className='glass-card rounded-2xl p-6 hover-glow transition-all duration-500'>
								<h3 className='text-xl font-semibold mb-4 text-primary font-mono'>{category.title}</h3>
								<div className='flex flex-wrap gap-2'>
									{category.skills.map((skill, skillIndex) => (
										<motion.span
											key={skill}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ delay: 0.2 + catIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
											className='px-3 py-1.5 text-sm bg-secondary rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors cursor-default'>
											{skill}
										</motion.span>
									))}
								</div>
							</motion.div>
						))}
					</div>

					{/* Proficiency Section */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className='mt-20'>
						<h2 className='text-2xl font-bold mb-8 text-center'>
							Proficiency <span className='gradient-text'>Levels</span>
						</h2>
						<div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
							{[
								{ skill: "React / Next.js", level: 95 },
								{ skill: "TypeScript", level: 90 },
								{ skill: "Node.js", level: 85 },
								{ skill: "Python", level: 80 },
								{ skill: "AWS / Cloud", level: 75 },
								{ skill: "Docker / K8s", level: 70 },
							].map((item, index) => (
								<motion.div
									key={item.skill}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
									className='space-y-2'>
									<div className='flex justify-between text-sm'>
										<span className='font-medium'>{item.skill}</span>
										<span className='text-primary font-mono'>{item.level}%</span>
									</div>
									<div className='h-2 bg-secondary rounded-full overflow-hidden'>
										<motion.div
											initial={{ width: 0 }}
											animate={{ width: `${item.level}%` }}
											transition={{ delay: 1 + index * 0.1, duration: 0.8, ease: "easeOut" }}
											className='h-full bg-gradient-to-r from-primary to-primary/60 rounded-full'
										/>
									</div>
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
