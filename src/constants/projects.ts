/**
 * Projects Data
 * Add, remove, or update your projects here
 */

export interface Project {
	title: string;
	description: string;
	tags: string[];
	image: string;
	video?: string;
	link: string;
	github: string;
	featured: boolean;
	mobile: boolean;
}

export const projects: Project[] = [
	{
		title: "UniFinderLK",
		description:
			"AI-powered Decision Support System for Sri Lankan university admissions — maps student dreams to viable academic pathways using hybrid NLP ranking, an AST rules engine, and Gemini-powered explainability.",
		tags: ["React", "FastAPI", "Node.js", "MongoDB", "Python", "Gemini AI", "NLP"],
		image: "https://res.cloudinary.com/dh3qafnzi/video/upload/so_0,w_800,h_450,c_fill/UniFinderLK_yohc2t.jpg",
		video: "https://res.cloudinary.com/dh3qafnzi/video/upload/q_auto,f_auto/UniFinderLK_yohc2t.mp4",
		link: "https://unifinderlk.vercel.app/",
		github: "",
		featured: true,
		mobile: false,
	},
	{
		title: "Shopping Eye",
		description:
			"Shopping mall navigation assistant with 3D shop finder, AI chatbot guidance, and live info updates built on the MERN stack.",
		tags: ["React", "NodeJs", "MongoDB", "Express", "Three Js", "Tailwind", "Chat Bot"],
		image: "https://res.cloudinary.com/dh3qafnzi/image/upload/v1732703488/Screenshot_2024-11-23_184750_u8u3bv.png",
		link: "",
		github: "https://github.com/YasiruKaveeshwara/Shopping-Eye-Extended_Shopping-Mall-Application",
		featured: false,
		mobile: false,
	},
	{
		title: "DonatePath",
		description:
			"Donation mobile app connecting donors, volunteers, and organizations with events, ratings, and profiles on Flutter + Firebase.",
		tags: ["Android", "Flutter", "Firebase"],
		image: "https://res.cloudinary.com/dh3qafnzi/image/upload/v1740570064/Loading_egqaev.png",
		link: "",
		github: "https://github.com/YasiruKaveeshwara/Donate-Path_Charity-Donation-Mobile-Application",
		featured: false,
		mobile: true,
	},
	{
		title: "Zero-Waste",
		description:
			"Waste management system with QR-based tracking, real-time peak monitoring, and collector management using MERN + design patterns.",
		tags: ["React", "NodeJs", "Express", "MongoDB", "Tailwind", "REST API", "QR Scan"],
		image: "https://res.cloudinary.com/dh3qafnzi/image/upload/v1740584434/Screenshot_2024-11-24_154731_oo1sje.png",
		link: "",
		github: "https://github.com/YasiruKaveeshwara/Zero-Waste",
		featured: false,
		mobile: false,
	},
	{
		title: "Book Reviewer",
		description:
			"Book review platform with authentication, filtering, and user-generated content built with the MERN stack.",
		tags: ["React", "NodeJs", "Express", "MongoDB", "Tailwind", "REST API", "JWT"],
		image: "https://res.cloudinary.com/dh3qafnzi/image/upload/v1740585424/Screenshot_2025-02-26_212616_nudcpu.png",
		link: "",
		github: "https://github.com/YasiruKaveeshwara/Book-Review-Platform",
		featured: false,
		mobile: false,
	},
	{
		title: "My Reminder",
		description: "Simple reminder app with alerts, create/delete flows, and offline storage using Kotlin and SQLite.",
		tags: ["Kotlin", "Android", "SQLite"],
		image:
			"https://res.cloudinary.com/dh3qafnzi/image/upload/v1740594004/WhatsApp_Image_2025-02-26_at_23.49.13_3e907469_caful8.jpg",
		link: "",
		github: "https://github.com/YasiruKaveeshwara/My_Reminder-Reminder_Mobile_Application",
		featured: false,
		mobile: true,
	},
	{
		title: "ExamineXpert",
		description: "Online examination management system with MCQ tracking, automated grading, and Java OOP design.",
		tags: ["Java", "OOP", "HTML", "CSS"],
		image: "https://res.cloudinary.com/dh3qafnzi/image/upload/v1732703488/examinexpert.png",
		link: "",
		github: "https://github.com/YasiruKaveeshwara/ExamineXpert-Examination-Management-System",
		featured: false,
		mobile: false,
	},
	{
		title: "Sky Fight Game",
		description:
			"Arcade shooter built with Kotlin where difficulty scales as the player's score rises, featuring smooth animations.",
		tags: ["Kotlin", "Android", "Game"],
		image: "https://res.cloudinary.com/dh3qafnzi/image/upload/v1740592967/20250226_232932_tdownz.jpg",
		link: "",
		github: "https://github.com/YasiruKaveeshwara/Sky-Fight-Android-Game",
		featured: false,
		mobile: true,
	},
];

// Get featured projects
export const getFeaturedProjects = (): Project[] => {
	return projects.filter((project) => project.featured);
};

// Get web projects (excludes featured to avoid duplication on the projects page)
export const getWebProjects = (): Project[] => {
	return projects.filter((project) => !project.mobile && !project.featured);
};

// Get mobile projects
export const getMobileProjects = (): Project[] => {
	return projects.filter((project) => project.mobile);
};
