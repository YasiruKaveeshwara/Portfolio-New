/**
 * Skills Data
 * Organize your technical skills by category
 */

export interface SkillCategory {
	title: string;
	skills: string[];
}

export const skillCategories: SkillCategory[] = [
	{
		title: "Frontend",
		skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
	},
	{
		title: "Backend",
		skills: ["Node.js", "Python", "PostgreSQL", "GraphQL", "MongoDB", "Express.js"],
	},
	{
		title: "DevOps",
		skills: ["AWS", "Docker", "CI/CD", "Kubernetes", "GitHub Actions", "Terraform"],
	},
	{
		title: "Tools",
		skills: ["Git", "Figma", "VS Code", "Postman", "Jira", "Linux"],
	},
	{
		title: "Soft Skills",
		skills: ["Team Leadership", "Problem Solving", "Communication", "Project Management", "Mentoring"],
	},
];

// Get all skills flattened
export const getAllSkills = (): string[] => {
	return skillCategories.flatMap((category) => category.skills);
};

// Get skills by category
export const getSkillsByCategory = (categoryTitle: string): string[] => {
	const category = skillCategories.find((cat) => cat.title === categoryTitle);
	return category ? category.skills : [];
};
