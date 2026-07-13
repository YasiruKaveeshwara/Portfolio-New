/**
 * Projects Data
 * Add, remove, or update your projects here
 */

export interface Project {
	title: string;
	slug: string;
	description: string;
	longDescription: string;
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
		slug: "unifinderlk",
		description:
			"AI-powered Decision Support System for Sri Lankan university admissions that maps student dreams to viable academic pathways using hybrid NLP ranking, an AST rules engine, and Gemini-powered explainability.",
		longDescription:
			"Navigating university admissions in Sri Lanka is one of the most stressful periods for any student. UniFinderLK is an AI-powered Decision Support System built specifically for the Sri Lankan education ecosystem. It bridges the gap between a student's informal dreams (e.g., 'I want to build AI') and strict, formal academic pathways, ensuring every recommendation is viable.\n\nFor O/L Students, the system recommends A/L streams, shows unlockable university degrees, and maps career paths based on interests and marks. For A/L Students, it matches them to eligible university programs using real cutoff data, filters by district and Z-score, and provides ranked recommendations.\n\nThe system uses a hybrid NLP ranking engine (TF-IDF + cosine similarity + keyword boosting) combined with an AST-based deterministic rules engine to ensure every recommendation is both relevant and academically valid. Gemini AI powers the explainability layer, providing clear reasoning for each suggestion.",
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
		slug: "shopping-eye",
		description:
			"Shopping mall navigation assistant with 3D shop finder, AI chatbot guidance, and live info updates built on the MERN stack.",
		longDescription:
			"Shopping Eye is a smart shopping mall companion application designed to enhance the in-mall experience. It features a 3D interactive map powered by Three.js that lets users find any shop within the mall, an AI chatbot that provides real-time guidance and answers queries about stores and promotions, and a live information feed for ongoing deals and events.\n\nThe application was built as a team project following Agile methodology. The backend runs on Node.js and Express with MongoDB for data storage, while the frontend uses React with Tailwind CSS for a responsive, modern interface.",
		tags: ["React", "NodeJs", "MongoDB", "Express", "Three Js", "Tailwind", "Chat Bot"],
		image: "https://res.cloudinary.com/dh3qafnzi/image/upload/v1732703488/Screenshot_2024-11-23_184750_u8u3bv.png",
		link: "",
		github: "https://github.com/YasiruKaveeshwara/Shopping-Eye-Extended_Shopping-Mall-Application",
		featured: false,
		mobile: false,
	},
	{
		title: "DonatePath",
		slug: "donatepath",
		description:
			"Donation mobile app connecting donors, volunteers, and organizations with events, ratings, and profiles on Flutter + Firebase.",
		longDescription:
			"DonatePath is a cross-platform mobile application built with Flutter and Firebase that connects donors, volunteers, and charitable organizations. Users can discover donation events, rate organizations based on transparency, and manage their giving profiles.\n\nThe app features role-based authentication (donor, volunteer, organization), event management with RSVP functionality, a rating and review system for accountability, and real-time notifications powered by Firebase Cloud Messaging.",
		tags: ["Android", "Flutter", "Firebase"],
		image: "https://res.cloudinary.com/dh3qafnzi/image/upload/v1740570064/Loading_egqaev.png",
		link: "",
		github: "https://github.com/YasiruKaveeshwara/Donate-Path_Charity-Donation-Mobile-Application",
		featured: false,
		mobile: true,
	},
	{
		title: "Zero-Waste",
		slug: "zero-waste",
		description:
			"Waste management system with QR-based tracking, real-time peak monitoring, and collector management using MERN + design patterns.",
		longDescription:
			"Zero-Waste is a comprehensive waste management system built to digitize and streamline municipal waste collection. It features QR code-based waste bin tracking, real-time monitoring dashboards that identify peak collection times, and a collector management module for route optimization.\n\nThe system follows established software design patterns (Factory, Observer, Strategy) for maintainability and was built using the MERN stack with REST APIs. It demonstrates practical application of software engineering principles learned in academic coursework.",
		tags: ["React", "NodeJs", "Express", "MongoDB", "Tailwind", "REST API", "QR Scan"],
		image: "https://res.cloudinary.com/dh3qafnzi/image/upload/v1740584434/Screenshot_2024-11-24_154731_oo1sje.png",
		link: "",
		github: "https://github.com/YasiruKaveeshwara/Zero-Waste",
		featured: false,
		mobile: false,
	},
	{
		title: "Book Reviewer",
		slug: "book-reviewer",
		description:
			"Book review platform with authentication, filtering, and user-generated content built with the MERN stack.",
		longDescription:
			"Book Reviewer is a full-stack web application where users can discover, review, and rate books. It features JWT-based authentication, advanced filtering and search, and a user-generated content system where readers can share their thoughts.\n\nBuilt with the MERN stack, the platform includes role-based access control, paginated book listings, and a clean responsive UI styled with Tailwind CSS.",
		tags: ["React", "NodeJs", "Express", "MongoDB", "Tailwind", "REST API", "JWT"],
		image: "https://res.cloudinary.com/dh3qafnzi/image/upload/v1740585424/Screenshot_2025-02-26_212616_nudcpu.png",
		link: "",
		github: "https://github.com/YasiruKaveeshwara/Book-Review-Platform",
		featured: false,
		mobile: false,
	},
	{
		title: "My Reminder",
		slug: "my-reminder",
		description: "Simple reminder app with alerts, create/delete flows, and offline storage using Kotlin and SQLite.",
		longDescription:
			"My Reminder is a native Android application built with Kotlin that helps users manage their daily tasks and reminders. It features local push notifications for alerts, intuitive create and delete flows, and full offline functionality using SQLite for persistent storage.\n\nThe app follows Android development best practices with a clean architecture separating the UI layer from data access.",
		tags: ["Kotlin", "Android", "SQLite"],
		image:
			"https://res.cloudinary.com/dh3qafnzi/image/upload/v1740594004/WhatsApp_Image_2025-02-26_at_23.49.13_3e907469_caful8.jpg",
		link: "",
		github: "https://github.com/YasiruKaveeshwara/My_Reminder-Reminder_Mobile_Application",
		featured: false,
		mobile: true,
	},
];

// Get a project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
	return projects.find((project) => project.slug === slug);
};

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
