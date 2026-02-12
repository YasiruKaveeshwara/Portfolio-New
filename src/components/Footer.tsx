import { Github, Linkedin, Mail, MapPin, ArrowUpRight, Heart, Facebook, MessageCircle, Instagram } from "lucide-react";
import { personalInfo } from "@/constants";
import Logo from "./Logo";

const socials = [
	{ icon: Github, href: personalInfo.social.github, label: "GitHub" },
	{ icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: MessageCircle, href: personalInfo.social.whatsapp, label: "WhatsApp" },
  { icon: Facebook, href: personalInfo.social.facebook, label: "Facebook" },
  { icon: Instagram, href: personalInfo.social.instagram, label: "Instagram" },
];

const Footer = () => {
	return (
		<footer className='py-10 border-t border-border'>
			<div className='container px-6'>
				<div className='grid gap-8 md:grid-cols-3 items-start'>
					<div>
						<div className='flex items-center gap-3'>
							<Logo className='h-6 w-auto text-primary' />
							<h3 className='text-lg font-semibold text-foreground'>{personalInfo.fullName}</h3>
						</div>
						<p className='text-sm text-muted-foreground mt-1'>{personalInfo.title}</p>
						<div className='mt-4 space-y-2 text-sm text-muted-foreground'>
							<a
								href={`mailto:${personalInfo.email}`}
								className='inline-flex items-center gap-2 hover:text-foreground transition-colors'>
								<Mail className='w-4 h-4' />
								{personalInfo.email}
							</a>
							<div className='inline-flex items-center gap-2'>
								<MapPin className='w-4 h-4' />
								{personalInfo.location}
							</div>
						</div>
					</div>

					<div>
						<h4 className='text-sm font-semibold text-foreground mb-3'>Quick Links</h4>
						<ul className='space-y-2 text-sm'>
							<li>
								<a href='#about' className='text-muted-foreground hover:text-foreground transition-colors'>
									About
								</a>
							</li>
							<li>
								<a href='#projects' className='text-muted-foreground hover:text-foreground transition-colors'>
									Projects
								</a>
							</li>
							<li>
								<a href='#contact' className='text-muted-foreground hover:text-foreground transition-colors'>
									Contact
								</a>
							</li>
							<li>
								<a href='/skills' className='text-muted-foreground hover:text-foreground transition-colors'>
									Skills
									<ArrowUpRight className='inline-block w-3.5 h-3.5 ml-1' />
								</a>
							</li>
						</ul>
					</div>

					<div className='flex md:justify-end'>
						<div>
							<h4 className='text-sm font-semibold text-foreground mb-3'>Connect</h4>
							<div className='flex items-center gap-3'>
								{socials.map((social) => (
									<a
										key={social.label}
										href={social.href}
										className='p-2 glass-card rounded-lg text-muted-foreground hover:text-foreground transition-colors'
										aria-label={social.label}>
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
