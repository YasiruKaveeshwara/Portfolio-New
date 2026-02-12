/**
 * Skills Data
 * Organize your technical skills by category with icons
 */

export interface Skill {
	name: string;
	icon: string;
}

export interface SkillCategory {
	title: string;
	skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
	{
		title: "Web Development",
		skills: [
			{ name: "React.js", icon: "devicon-react-original colored" },
			{ name: "Next.js", icon: "devicon-nextjs-original-wordmark" },
			{ name: "Three.js", icon: "devicon-threejs-original" },
			{ name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
			{ name: "Node.js", icon: "devicon-nodejs-plain colored" },
			{ name: "Express.js", icon: "devicon-express-original colored" },
			{ name: "Spring Boot", icon: "devicon-spring-plain colored" },
			{ name: "PHP", icon: "devicon-php-plain colored" },
			{ name: "Laravel", icon: "devicon-laravel-plain colored" },
		],
	},
	{
		title: "Programming Languages",
		skills: [
			{ name: "Java", icon: "devicon-java-plain colored" },
			{ name: "JavaScript", icon: "devicon-javascript-plain colored" },
			{ name: "TypeScript", icon: "devicon-typescript-plain colored" },
			{ name: "Python", icon: "devicon-python-plain colored" },
			{ name: "C++", icon: "devicon-cplusplus-plain colored" },
			{ name: "C", icon: "devicon-c-plain colored" },
			{ name: "SQL", icon: "devicon-mysql-plain colored" },
			{ name: "R", icon: "devicon-r-plain colored" },
			{ name: "Dart", icon: "devicon-dart-plain colored" },
		],
	},
	{
		title: "Mobile Development",
		skills: [
			{ name: "Flutter", icon: "devicon-flutter-plain colored" },
			{ name: "Kotlin (Android)", icon: "devicon-kotlin-plain colored" },
			{ name: "React Native", icon: "devicon-react-original colored" },
		],
	},
	{
		title: "Database Management",
		skills: [
			{ name: "MongoDB", icon: "devicon-mongodb-plain colored" },
			{ name: "Firebase", icon: "devicon-firebase-plain colored" },
			{ name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
			{ name: "MySQL", icon: "devicon-mysql-plain colored" },
			{ name: "SQLite", icon: "devicon-sqlite-plain colored" },
			{ name: "MS SQL Server", icon: "devicon-microsoftsqlserver-plain colored" },
		],
	},
	{
		title: "Version Control & Testing",
		skills: [
			{ name: "GitHub", icon: "devicon-github-original" },
			{ name: "Git", icon: "devicon-git-plain colored" },
			{ name: "JUnit", icon: "devicon-junit-plain colored" },
			{ name: "Jest", icon: "devicon-jest-plain colored" },
			{ name: "Selenium", icon: "devicon-selenium-original colored" },
			{ name: "Postman", icon: "devicon-postman-plain colored" },
			{ name: "ZAP", icon: "devicon-zap-plain colored" },
			{ name: "Cypress", icon: "devicon-cypress-plain colored" },
			{ name: "Bruno", icon: "devicon-bruno-plain colored" },
		],
	},
	{
		title: "Tools & Software",
		skills: [
			{ name: "VS Code", icon: "devicon-vscode-plain colored" },
			{ name: "Visual Studio", icon: "devicon-visualstudio-plain colored" },
			{ name: "IntelliJ", icon: "devicon-intellij-plain colored" },
			{ name: "Android Studio", icon: "devicon-androidstudio-plain colored" },
			{ name: "Eclipse", icon: "devicon-eclipse-plain colored" },
			{ name: "R Studio", icon: "devicon-rstudio-plain" },
			{ name: "Postman", icon: "devicon-postman-plain colored" },
			{ name: "Azure DevOps", icon: "devicon-azure-plain colored" },
			{ name: "Figma", icon: "devicon-figma-plain colored" },
		],
	},
	{
		title: "DevOps & Cloud",
		skills: [
			{ name: "Docker", icon: "devicon-docker-plain colored" },
			{ name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
			{ name: "CI/CD", icon: "devicon-githubactions-plain colored" },
			{ name: "GitHub Actions", icon: "devicon-githubactions-plain colored" },
		],
	},
];

export const otherSkillCategories: SkillCategory[] = [
	{
		title: "Technical & Development Skills",
		skills: [
			{ name: "API Development & Integration", icon: "fa fa-plug" },
			{ name: "Full-Stack Web Development (MERN)", icon: "fa fa-laptop-code" },
			{ name: "Mobile App Development", icon: "fa fa-mobile-alt" },
			{ name: "Frontend Frameworks", icon: "fa fa-window-maximize" },
			{ name: "Backend Frameworks", icon: "fa fa-server" },
			{ name: "Database Design & Management", icon: "fa fa-database" },
			{ name: "Object-Oriented Programming (OOP)", icon: "fa fa-cogs" },
			{ name: "Data Structures & Algorithms", icon: "fa fa-sitemap" },
			{ name: "RESTful APIs", icon: "fa fa-code" },
			{ name: "UI/UX Design & Prototyping", icon: "fa fa-paint-brush" },
			{ name: "Responsive Web Design & Accessibility", icon: "fa fa-desktop" },
			{ name: "Project Management & Agile", icon: "fa fa-project-diagram" },
			{ name: "Technical Documentation", icon: "fa fa-file-alt" },
			{ name: "Version Control & GitOps", icon: "fa fa-code-branch" },
			{ name: "CI/CD Pipelines", icon: "fa fa-sync" },
		],
	},
	{
		title: "Soft Skills",
		skills: [
			{ name: "Leadership & Decision Making", icon: "fa fa-users" },
			{ name: "Collaboration & Teamwork", icon: "fa fa-handshake" },
			{ name: "Time Management & Prioritization", icon: "fa fa-clock" },
			{ name: "Adaptability & Growth Mindset", icon: "fa fa-sync-alt" },
			{ name: "Creativity & Innovation", icon: "fa fa-lightbulb" },
			{ name: "Critical Thinking & Strategy", icon: "fa fa-brain" },
			{ name: "Problem Solving & Troubleshooting", icon: "fa fa-puzzle-piece" },
			{ name: "Effective Communication", icon: "fa fa-comments" },
			{ name: "Emotional Intelligence (EQ)", icon: "fa fa-heart" },
		],
	},
];

// Get all skills flattened
export const getAllSkills = (): Skill[] => {
	return skillCategories.flatMap((category) => category.skills);
};

// Get skills by category
export const getSkillsByCategory = (categoryTitle: string): Skill[] => {
	const category = skillCategories.find((cat) => cat.title === categoryTitle);
	return category ? category.skills : [];
};
