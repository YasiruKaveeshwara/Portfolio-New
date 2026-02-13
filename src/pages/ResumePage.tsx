import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Download, ExternalLink } from "lucide-react";
import { personalInfo } from "@/constants";

const ResumePage = () => {
	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
			<Navigation />
			<main className='pt-32 pb-20'>
				<div className='container px-6'>
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
						<div className='text-center mb-16'>
							<span className='inline-block text-primary font-mono text-sm mb-4'>— Professional</span>
							<h1 className='text-4xl md:text-6xl font-bold mb-6'>
								My <span className='gradient-text'>Resume</span>
							</h1>
							<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
								Download or view my professional resume and background
							</p>
						</div>
					</motion.div>

					<div className='max-w-5xl mx-auto'>
						{/* Download Section */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
							<a
								href={personalInfo.resumePdf}
								download
								className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all group'>
								<Download className='w-5 h-5' />
								Download Resume
							</a>
							<a
								href={personalInfo.resumePdf}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-all group'>
								<ExternalLink className='w-5 h-5' />
								Open in New Tab
							</a>
						</motion.div>

						{/* PDF Viewer */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className='glass-card rounded-2xl overflow-hidden hover-glow'>
							<div className='bg-muted/50 border-b border-border/50 px-6 py-4'>
								<h2 className='font-semibold text-foreground'>Resume Preview</h2>
								<p className='text-sm text-muted-foreground'>
									{personalInfo.fullName} - {personalInfo.title}
								</p>
							</div>

							<div className='aspect-[8.5/11] md:min-h-225 bg-white'>
								<iframe src={personalInfo.resumePdf} className='w-full h-full' title='Resume PDF' />
							</div>
						</motion.div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default ResumePage;
