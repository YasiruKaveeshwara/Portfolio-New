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
