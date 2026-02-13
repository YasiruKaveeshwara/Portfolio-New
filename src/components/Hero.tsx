import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../constants";

const Hero = () => {
	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Background glow */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-200 bg-linear-to-r from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl' />
				<div className='absolute bottom-0 left-0 w-150 h-150 bg-primary/10 rounded-full blur-3xl' />
			</div>

			{/* Noise overlay */}
			<div className='absolute inset-0 noise pointer-events-none' />

			{/* Grid pattern */}
			<div className='absolute inset-0 bg-[linear-gradient(hsl(220_20%_15%/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(220_20%_15%/0.3)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]' />

			<div className='container relative z-10 px-6'>
				<div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
					{/* Left: Text Content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className='text-center lg:text-left flex-1'>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8'>
							<span className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
							<span className='text-sm text-muted-foreground font-mono'>
								{personalInfo.isAvailableForWork ? "Available for work" : "Not currently available"}
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6'>
							<span className='block text-foreground'>Hi, I'm</span>
							<span className='block gradient-text text-glow'>{personalInfo.fullName}</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.8 }}
							className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed'>
							{personalInfo.bio}
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7, duration: 0.8 }}
							className='flex items-center justify-center lg:justify-start gap-4'>
							<a
								href='#projects'
								className='group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover-glow'>
								<span className='relative z-10'>View My Work</span>
								<ArrowDown className='w-4 h-4 relative z-10 transition-transform group-hover:translate-y-1' />
							</a>

							<div className='flex items-center gap-2'>
								{[
									{ icon: Github, href: personalInfo.social.github, label: "GitHub" },
									{ icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
									{ icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
								].map((social, i) => (
									<motion.a
										key={social.label}
										href={social.href}
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
										className='p-3 glass-card rounded-xl hover:bg-secondary transition-all duration-300 hover:scale-110'
										aria-label={social.label}>
										<social.icon className='w-5 h-5 text-muted-foreground hover:text-foreground transition-colors' />
									</motion.a>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* Right: Profile Photo */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8, x: 40 }}
						animate={{ opacity: 1, scale: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
						className='relative shrink-0'>
						{/* Decorative glow behind photo */}
						<div className='absolute -inset-4 bg-linear-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-2xl animate-pulse' />
						{/* Gradient ring */}
						<div className='relative p-1 rounded-full bg-linear-to-br from-primary via-primary/50 to-primary/20'>
							<div className='rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 ring-4 ring-background'>
								<img src='/photo.svg' alt={personalInfo.fullName} className='w-full h-full object-cover' />
							</div>
						</div>
						{/* Floating accent dots */}
						<motion.div
							animate={{ y: [-8, 8, -8] }}
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
							className='absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-60 blur-sm'
						/>
						<motion.div
							animate={{ y: [8, -8, 8] }}
							transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
							className='absolute -bottom-3 -left-3 w-8 h-8 bg-primary/40 rounded-full blur-sm'
						/>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 0.8 }}
				className='absolute bottom-10 left-1/2 -translate-x-1/2'>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					className='w-6 h-10 rounded-full border-2 border-muted flex items-start justify-center p-2'>
					<motion.div className='w-1 h-2 bg-primary rounded-full' />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
