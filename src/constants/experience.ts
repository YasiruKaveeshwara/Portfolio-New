/**
 * Work Experience Data
 * Add, remove, or update your work experience
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
		title: "Senior Software Engineer",
		company: "Tech Corp",
		period: "2022 - Present",
		description:
			"Leading development of microservices architecture, mentoring junior developers, and implementing CI/CD pipelines.",
		technologies: ["React", "Node.js", "AWS", "Docker"],
	},
	{
		title: "Software Engineer",
		company: "StartupXYZ",
		period: "2020 - 2022",
		description: "Built scalable web applications and RESTful APIs. Improved application performance by 40%.",
		technologies: ["TypeScript", "Next.js", "PostgreSQL", "Redis"],
	},
	{
		title: "Junior Developer",
		company: "Digital Agency",
		period: "2018 - 2020",
		description: "Developed responsive websites and e-commerce solutions for various clients.",
		technologies: ["JavaScript", "React", "CSS", "Firebase"],
	},
	{
		title: "Software Development Intern",
		company: "Innovation Labs",
		period: "2017 - 2018",
		description: "Assisted in building internal tools and learned industry best practices.",
		technologies: ["Python", "Django", "MySQL"],
	},
];

// Get work experience
export const getExperiences = (): WorkExperience[] => {
	return experiences;
};

// Get latest/current experience
export const getCurrentExperience = (): WorkExperience | undefined => {
	return experiences[0];
};
