import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navItems = [
	{ label: "About", href: "/#about" },
	{ label: "Skills", href: "/skills" },
	{ label: "Projects", href: "/projects" },
	{ label: "Resume", href: "/resume" },
	{ label: "Contact", href: "/#contact" },
];

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "glass-card py-4" : "py-6"
			}`}>
			<nav className='container px-6 flex items-center justify-between'>
				<a href='/' className='flex items-center text-primary'>
					<motion.div
						className='flex items-center'
						whileHover={{ scale: 1.05 }}
						transition={{ type: "spring", stiffness: 400 }}>
						<Logo className='h-8 w-auto' />
						<span className='ml-2 font-bold text-lg text-foreground'>Yasiru Kaveeshwara</span>
					</motion.div>
				</a>

				{/* Desktop nav */}
				<ul className='hidden md:flex items-center gap-8'>
					{navItems.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className='text-sm text-muted-foreground hover:text-foreground transition-colors relative group'>
								{item.label}
								<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full' />
							</a>
						</li>
					))}
					<li>
						<a
							href='#contact'
							className='px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-all'>
							Hire Me
						</a>
					</li>
				</ul>

				{/* Mobile menu button */}
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className='md:hidden p-2 text-foreground'
					aria-label='Toggle menu'>
					{isMobileMenuOpen ?
						<X className='w-6 h-6' />
					:	<Menu className='w-6 h-6' />}
				</button>
			</nav>

			{/* Mobile menu */}
			<motion.div
				initial={false}
				animate={{
					height: isMobileMenuOpen ? "auto" : 0,
					opacity: isMobileMenuOpen ? 1 : 0,
				}}
				transition={{ duration: 0.3 }}
				className='md:hidden overflow-hidden glass-card mt-2 mx-4 rounded-xl'>
				<ul className='p-4 space-y-4'>
					{navItems.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className='block text-muted-foreground hover:text-foreground transition-colors'>
								{item.label}
							</a>
						</li>
					))}
					<li>
						<a
							href='#contact'
							onClick={() => setIsMobileMenuOpen(false)}
							className='block w-full text-center px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg'>
							Hire Me
						</a>
					</li>
				</ul>
			</motion.div>
		</motion.header>
	);
};

export default Navigation;
