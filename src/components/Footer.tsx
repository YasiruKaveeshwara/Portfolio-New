import { Github, Linkedin, Mail, MapPin, Heart, Facebook, MessageCircle, Phone } from "lucide-react";
import { personalInfo } from "@/constants";
import Logo from "./Logo";

const socials = [
	{ icon: Github, href: personalInfo.social.github, label: "GitHub" },
	{ icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
	{ icon: MessageCircle, href: personalInfo.social.whatsapp, label: "WhatsApp" },
	{ icon: Facebook, href: personalInfo.social.facebook, label: "Facebook" },
];

const quickLinks = [
	{ label: "Skills", href: "/skills" },
	{ label: "Projects", href: "/projects" },
	{ label: "Resume", href: "/resume" },
];

const Footer = () => {
	return (
		<footer className='py-10 border-t border-border'>
			<div className='container px-4 sm:px-6'>
				<div className='grid gap-8 md:grid-cols-3 items-start'>
					{/* Brand & Contact */}
					<div>
						<div className='flex items-center gap-3'>
							<Logo className='h-6 w-auto text-primary' />
							<h3 className='text-lg font-semibold text-foreground'>{personalInfo.fullName}</h3>
						</div>
						<p className='text-sm text-muted-foreground mt-1'>{personalInfo.title}</p>
						<div className='mt-4 flex flex-col gap-2 text-sm text-muted-foreground'>
							<a
								href={`mailto:${personalInfo.email}`}
								className='inline-flex items-center gap-2 hover:text-foreground transition-colors'>
								<Mail className='w-4 h-4 shrink-0' />
								{personalInfo.email}
							</a>
							<div className='inline-flex items-center gap-2'>
								<MapPin className='w-4 h-4 shrink-0' />
								{personalInfo.location}
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div className='flex md:justify-center'>
						<div>
							<h4 className='text-sm font-semibold text-foreground mb-3'>Quick Links</h4>
							<ul className='flex flex-col gap-2'>
								{quickLinks.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Connect & Copyright */}
					<div className='flex md:justify-end'>
						<div>
							<h4 className='text-sm font-semibold text-foreground mb-3'>Connect</h4>
							<div className='flex items-center gap-3'>
								{socials.map((social) => (
									<a
										key={social.label}
										href={social.href}
										className='p-2 glass-card rounded-lg text-muted-foreground hover:text-foreground transition-colors'
										aria-label={social.label}
										title={social.label}
										target='_blank'
										rel='noreferrer'>
										<social.icon className='w-5 h-5' />
									</a>
								))}
							</div>
							<div className='flex items-center gap-2 text-xs text-muted-foreground mt-4'>
								<span>
									© {new Date().getFullYear()} {personalInfo.fullName}
								</span>
								<span>•</span>
								<span>Built with</span>
								<Heart className='w-3.5 h-3.5 text-red-500 fill-red-500' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
