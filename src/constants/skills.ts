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
			{ name: "Full-Stack Architecture (MERN)", icon: "fa fa-layer-group" }, // Renamed to sound more "Engineering" focused
			{ name: "API Development & Integration", icon: "fa fa-plug" },
			{ name: "Database Design (MongoDB/SQL)", icon: "fa fa-database" },
			{ name: "System Scalability & Performance", icon: "fa fa-tachometer-alt" }, // Added to match your "Scalable Systems" heading
			{ name: "Object-Oriented Programming (OOP)", icon: "fa fa-cogs" },
			{ name: "Data Structures & Algorithms", icon: "fa fa-sitemap" },
			{ name: "Component-Based Design", icon: "fa fa-cubes" }, // More specific to React/Modern Web
			{ name: "RESTful API Standards", icon: "fa fa-code" },
			{ name: "Version Control (Git/GitHub)", icon: "fa fa-code-branch" },
			{ name: "Responsive & Adaptive UI", icon: "fa fa-desktop" },
			{ name: "Authentication & Security", icon: "fa fa-user-shield" }, // Crucial for a full-stack dev
			{ name: "Technical Documentation", icon: "fa fa-file-alt" },
			{ name: "CI/CD & Deployment", icon: "fa fa-rocket" }, // Good if you used Vercel/Netlify/AWS
		],
	},
	{
		title: "Professional & Soft Skills",
		skills: [
			{ name: "First Principles Thinking", icon: "fa fa-lightbulb" }, // YOUR BRAND: Replaces generic "Critical Thinking"
			{ name: "Complex Problem Solving", icon: "fa fa-puzzle-piece" },
			{ name: "Client Management", icon: "fa fa-briefcase" }, // Added because of your Freelance work
			{ name: "Agile & Team Collaboration", icon: "fa fa-users" },
			{ name: "Adaptability & Rapid Learning", icon: "fa fa-sync-alt" },
			{ name: "Time Management & Delivery", icon: "fa fa-clock" }, // Important for freelancers
			{ name: "Strategic Decision Making", icon: "fa fa-chess" },
			{ name: "Effective Communication", icon: "fa fa-comments" },
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
