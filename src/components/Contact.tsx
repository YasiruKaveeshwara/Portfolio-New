import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Github, Linkedin } from "lucide-react";
import { contactInfo, contactFormMessages } from "../constants";

const Contact = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<section id='contact' className='relative py-32 overflow-hidden'>
			{/* Background */}
			<div className='absolute left-1/2 top-0 -translate-x-1/2 w-200 h-100 bg-primary/5 rounded-full blur-3xl' />

			<div className='container px-6' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'>
					<span className='inline-block text-primary font-mono text-sm mb-4'>— Get In Touch</span>
					<h2 className='text-4xl md:text-5xl font-bold mb-6'>
						Let's <span className='gradient-text'>Connect</span>
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Have a project in mind or just want to chat? I'd love to hear from you.
					</p>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
					{/* Contact info */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.2, duration: 0.6 }}>
						<h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
						<p className='text-muted-foreground mb-8 leading-relaxed'>{contactInfo.availability}</p>

						<div className='space-y-6'>
							<div className='flex items-center gap-4'>
								<div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
									<Linkedin className='w-5 h-5 text-primary' />
								</div>
								<div>
									<p className='text-sm text-muted-foreground'>LinkedIn</p>
									<a href={contactInfo.Linkedin} className='font-medium hover:text-primary transition-colors'>
										Yasiru Kaveeshwara
									</a>
								</div>
							</div>

							<div className='flex items-center gap-4'>
								<div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
									<Mail className='w-5 h-5 text-primary' />
								</div>
								<div>
									<p className='text-sm text-muted-foreground'>Email</p>
									<a href={`mailto:${contactInfo.email}`} className='font-medium hover:text-primary transition-colors'>
										{contactInfo.email}
									</a>
								</div>
							</div>

							<div className='flex items-center gap-4'>
								<div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
									<MapPin className='w-5 h-5 text-primary' />
								</div>
								<div>
									<p className='text-sm text-muted-foreground'>Location</p>
									<p className='font-medium'>{contactInfo.location}</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Contact form */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.3, duration: 0.6 }}>
						{submitted ?
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								className='h-full flex flex-col items-center justify-center glass-card rounded-2xl p-8'>
								<CheckCircle className='w-16 h-16 text-green-500 mb-4' />
								<h3 className='text-2xl font-bold mb-2'>Message Sent!</h3>
								<p className='text-muted-foreground text-center'>{contactFormMessages.successMessage}</p>
							</motion.div>
						:	<form onSubmit={handleSubmit} className='glass-card rounded-2xl p-8'>
								<div className='space-y-6'>
									<div className='grid md:grid-cols-2 gap-6'>
										<div>
											<label htmlFor='name' className='block text-sm font-medium mb-2'>
												Name
											</label>
											<input
												type='text'
												id='name'
												required
												className='w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all'
												placeholder='John Doe'
											/>
										</div>
										<div>
											<label htmlFor='email' className='block text-sm font-medium mb-2'>
												Email
											</label>
											<input
												type='email'
												id='email'
												required
												className='w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all'
												placeholder='john@example.com'
											/>
										</div>
									</div>

									<div>
										<label htmlFor='subject' className='block text-sm font-medium mb-2'>
											Subject
										</label>
										<input
											type='text'
											id='subject'
											required
											className='w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all'
											placeholder='Project collaboration'
										/>
									</div>

									<div>
										<label htmlFor='message' className='block text-sm font-medium mb-2'>
											Message
										</label>
										<textarea
											id='message'
											required
											rows={4}
											className='w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none'
											placeholder='Tell me about your project...'
										/>
									</div>

									<button
										type='submit'
										className='w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all hover-glow flex items-center justify-center gap-2'>
										{contactFormMessages.submitButtonText}
										<Send className='w-4 h-4' />
									</button>
								</div>
							</form>
						}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
