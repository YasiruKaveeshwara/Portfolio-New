import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
	const location = useLocation();

	// Scroll to anchor when arriving from another page via navigate("/", { state: { scrollTo } })
	useEffect(() => {
		const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
		if (scrollTo) {
			// Delay to let the page fully render before scrolling
			const timer = setTimeout(() => {
				const el = document.getElementById(scrollTo);
				if (el) el.scrollIntoView({ behavior: "smooth" });
			}, 150);
			return () => clearTimeout(timer);
		}
	}, [location.state]);

	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
			<Navigation />
			<main>
				<Hero />
				<SectionDivider />
				<About />
				<SectionDivider />
				<Skills />
				<SectionDivider />
				<Experience />
				<SectionDivider />
				<Education />
				<SectionDivider />
				<Projects />
				<SectionDivider />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
