/**
 * Education & Certifications Data
 * Update your educational background and certifications
 */

export interface EducationEntry {
	degree: string;
	institution: string;
	period: string;
	description: string;
	achievements: string[];
}

export interface Certification {
	name: string;
	issuer: string;
	year: string;
	credentialUrl?: string;
}

export const educationEntries: EducationEntry[] = [
	{
		degree: "BSc. (Hons) Information Technology specializing in Software Engineering",
		institution: "Sri Lanka Institute of Information Technology (SLIIT)",
		period: "2022 - Present",
		description: "Expected Graduation: 2026",
		achievements: [
			"Studying core computer science concepts including data structures, algorithms, OOP, and databases.",
			"Developed various full stack applications and mobile apps.",
			"Engaged in industry-level software engineering concepts.",
		],
	},
	{
		degree: "Diploma in English",
		institution: "Britishway English Academy",
		period: "2022",
		description: "Merit Pass",
		achievements: ["Studied English language and literature.", "Developed strong communication skills in English."],
	},
	{
		degree: "G.C.E Advanced Level - Physical Science Stream",
		institution: "President's College, Minuwangoda",
		period: "2019 - 2021",
		description: "",
		achievements: [
			"Studied Combined Mathematics, Physics, and Information and Communication Technology.",
			"Developed a strong foundation in mathematics and physics.",
		],
	},
];

export const certifications: Certification[] = [
	{
		name: "AWS Solutions Architect",
		issuer: "Amazon Web Services",
		year: "2023",
		credentialUrl: "https://aws.amazon.com",
	},
	{
		name: "Google Cloud Professional",
		issuer: "Google",
		year: "2022",
		credentialUrl: "https://cloud.google.com",
	},
	{
		name: "Kubernetes Administrator",
		issuer: "CNCF",
		year: "2021",
		credentialUrl: "https://cncf.io",
	},
];
