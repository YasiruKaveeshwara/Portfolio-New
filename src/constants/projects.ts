/**
 * Projects Data
 * Add, remove, or update your projects here
 */

export interface Project {
	title: string;
	description: string;
	tags: string[];
	image: string;
	link: string;
	github: string;
	featured: boolean;
}

export const projects: Project[] = [
	{
		title: "CloudSync Pro",
		description:
			"A real-time collaboration platform for distributed teams with live document editing and video conferencing.",
		tags: ["React", "WebRTC", "Node.js", "PostgreSQL"],
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
		link: "#",
		github: "#",
		featured: true,
	},
	{
		title: "FinTrack",
		description: "Personal finance dashboard with AI-powered insights and automated budget tracking.",
		tags: ["Next.js", "Python", "TensorFlow", "Stripe"],
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
		link: "#",
		github: "#",
		featured: true,
	},
	{
		title: "E-Commerce Platform",
		description:
			"Full-featured e-commerce solution with payment integration, inventory management, and admin dashboard.",
		tags: ["React", "TypeScript", "Stripe", "MongoDB"],
		image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
		link: "#",
		github: "#",
		featured: false,
	},
	{
		title: "Task Management App",
		description: "Collaborative task management tool with real-time updates and team collaboration features.",
		tags: ["Next.js", "Firebase", "React", "Tailwind CSS"],
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
		link: "#",
		github: "#",
		featured: false,
	},
	{
		title: "Analytics Dashboard",
		description: "Data visualization platform for tracking business metrics with interactive charts and reports.",
		tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
		image: "https://images.unsplash.com/photo-1518932945970-6a386f81a188?w=800&q=80",
		link: "#",
		github: "#",
		featured: false,
	},
	{
		title: "API Gateway",
		description: "Microservices API gateway with authentication, rate limiting, and request routing.",
		tags: ["Node.js", "Express", "Docker", "Kubernetes"],
		image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&q=80",
		link: "#",
		github: "#",
		featured: false,
	},
];

// Get featured projects
export const getFeaturedProjects = (): Project[] => {
	return projects.filter((project) => project.featured);
};

// Get all projects
export const getAllProjects = (): Project[] => {
	return projects;
};
