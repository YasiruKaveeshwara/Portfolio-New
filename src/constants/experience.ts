/**
 * Work Experience Data
 * Updated with Freelance history and VXD Internship
 */

export interface WorkExperience {
	title: string;
	company: string;
	period: string;
	description: string;
	technologies: string[];
}

export const experiences: WorkExperience[] = [
	{
		title: "Software Engineering Intern",
		company: "Visionex Digital (pvt) Ltd",
		period: "2025 April - December (9 months)",
		description:
			"Built and shipped production features for client-facing web applications using Next.js and Spring Boot. Integrated Auth0 authentication and Firebase real-time features, optimized front-end performance, and contributed to multiple client projects in an Agile team environment.",
		technologies: ["Next.js", "Springboot", "Firebase", "Tailwind CSS", "Auth0"],
	},
	{
		title: "Freelance Web Developer",
		company: "Self-Employed",
		period: "2024 - Present",
		description:
			"Designing and developing custom full-stack solutions for clients, handling the complete lifecycle from requirements gathering and database architecture through to frontend deployment. Focused on delivering responsive, high-performance web applications with clean, maintainable code.",
		technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Git"],
	},
];
