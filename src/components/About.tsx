import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import { Code2, Cpu, Layers, Zap } from "lucide-react";
import { aboutStats, highlights } from "../constants";

const iconMap = {
	Code2,
	Zap,
	Layers,
	Cpu,
} as const;

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id='about' className='relative py-32 overflow-hidden'>
			{/* Background accent */}
			<div className='absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl' />

			<div className='container px-6' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='grid lg:grid-cols-2 gap-16 items-center'>
					{/* Left content */}
					<div>
						<motion.span
							initial={{ opacity: 0, x: -20 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ delay: 0.2 }}
							className='inline-block text-primary font-mono text-sm mb-4'>
							— About Me
						</motion.span>

						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.3, duration: 0.6 }}
							className='text-4xl md:text-5xl font-bold mb-6'>
							Passionate about
							<span className='gradient-text'> building</span>
							<br />
							the future of web
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.4, duration: 0.6 }}
							className='text-lg text-muted-foreground leading-relaxed mb-8'>
							I'm a software engineer based in San Francisco with a passion for creating elegant solutions to complex
							problems. With expertise in modern web technologies, I transform ideas into polished, production-ready
							applications.
						</motion.p>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.5, duration: 0.6 }}
							className='text-lg text-muted-foreground leading-relaxed mb-10'>
							When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing
							knowledge through tech blogs and mentoring.
						</motion.p>

						{/* Stats */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.6, duration: 0.6 }}
							className='grid grid-cols-2 md:grid-cols-4 gap-6'>
							{aboutStats.map((stat, i) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={isInView ? { opacity: 1, scale: 1 } : {}}
									transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
									className='text-center'>
									<div className='text-3xl font-bold gradient-text'>{stat.value}</div>
									<div className='text-sm text-muted-foreground mt-1'>{stat.label}</div>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Right content - Highlights grid */}
					<div className='grid grid-cols-2 gap-4'>
						{highlights.map((item, i) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 30 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
								className='group p-6 glass-card rounded-2xl hover:bg-secondary/50 transition-all duration-500 hover-glow'>
								<div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors'>
									{React.createElement(iconMap[item.icon], { className: "w-6 h-6 text-primary" })}
								</div>
								<h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
								<p className='text-sm text-muted-foreground'>{item.desc}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
