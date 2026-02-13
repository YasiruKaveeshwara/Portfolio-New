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
			"Collaborated with the development team to build and optimize web components. Gained hands-on experience in a professional environment, moving from theoretical concepts to shipping production-ready features and improving system reliability.",
		technologies: ["Next.js", "Springboot", "Firebase", "Tailwind CSS", "Auth0"],
	},
	{
		title: "Freelance Web Developer",
		company: "Self-Employed",
		period: "2024 - Present",
		description:
			"Designing and developing custom full-stack solutions for various clients. I focus on building responsive web applications from the ground up, managing everything from database architecture to frontend deployment while ensuring high performance and clean code.",
		technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Git"],
	},
];
