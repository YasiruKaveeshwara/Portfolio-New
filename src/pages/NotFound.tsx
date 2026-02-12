import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
	const location = useLocation();

	useEffect(() => {
		console.error("404 Error: User attempted to access non-existent route:", location.pathname);
	}, [location.pathname]);

	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col'>
			<Navigation />
			<main className='grow pt-20 pb-20'>
				{/* Background elements */}
				<div className='absolute top-20 right-0 w-125 h-125 bg-primary/5 rounded-full blur-3xl pointer-events-none' />
				<div className='absolute bottom-32 left-0 w-100 h-100 bg-secondary/5 rounded-full blur-3xl pointer-events-none' />

				<div className='container px-6 relative z-10'>
					<div className='flex flex-col items-center justify-center min-h-150'>
						{/* 404 Number */}
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6 }}
							className='relative mb-8'>
							<div className='text-9xl md:text-[200px] font-black gradient-text animate-pulse'>404</div>
							<motion.div
								animate={{ rotate: 360 }}
								transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
								className='absolute -top-8 -right-8 text-4xl'>
								<Zap className='w-16 h-16 text-yellow-400' />
							</motion.div>
						</motion.div>

						{/* Content */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className='text-center max-w-2xl'>
							<h1 className='text-4xl md:text-5xl font-bold mb-4'>
								Page Not <span className='gradient-text'>Found</span>
							</h1>

							<p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
								Oops! It seems you've wandered into the digital void. The page you're looking for doesn't exist or has
								been moved to another dimension.
							</p>

							{/* Route Display */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3, duration: 0.6 }}
								className='mb-8 p-4 bg-secondary/30 border border-secondary rounded-xl'>
								<p className='text-sm text-muted-foreground'>
									Attempted path: <code className='text-primary font-mono'>{location.pathname}</code>
								</p>
							</motion.div>

							{/* Action Buttons */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.6 }}
								className='flex flex-col sm:flex-row gap-4 justify-center'>
								<Link
									to='/'
									className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all hover:scale-105 group'>
									<Home className='w-5 h-5 group-hover:-translate-y-1 transition-transform' />
									Back to Home
								</Link>

								<button
									onClick={() => window.history.back()}
									className='inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all hover:scale-105 group'>
									<ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
									Go Back
								</button>
							</motion.div>

							{/* Suggestions */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5, duration: 0.6 }}
								className='mt-12 pt-8 border-t border-border'>
								<p className='text-sm text-muted-foreground mb-4'>What you might be looking for:</p>
								<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
									<Link
										to='/#about'
										className='p-4 rounded-xl bg-secondary/20 hover:bg-secondary/40 transition-colors group'>
										<h3 className='font-semibold mb-2 group-hover:text-primary transition-colors'>About</h3>
										<p className='text-sm text-muted-foreground'>Learn more about me</p>
									</Link>

									<Link
										to='/#projects'
										className='p-4 rounded-xl bg-secondary/20 hover:bg-secondary/40 transition-colors group'>
										<h3 className='font-semibold mb-2 group-hover:text-primary transition-colors'>Projects</h3>
										<p className='text-sm text-muted-foreground'>Check out my work</p>
									</Link>

									<Link
										to='/#contact'
										className='p-4 rounded-xl bg-secondary/20 hover:bg-secondary/40 transition-colors group'>
										<h3 className='font-semibold mb-2 group-hover:text-primary transition-colors'>Contact</h3>
										<p className='text-sm text-muted-foreground'>Get in touch with me</p>
									</Link>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default NotFound;
