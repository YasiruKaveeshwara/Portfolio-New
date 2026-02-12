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
		degree: "Master of Science in Computer Science",
		institution: "Stanford University",
		period: "2016 - 2018",
		description: "Specialized in Machine Learning and Distributed Systems. GPA: 3.9/4.0",
		achievements: ["Dean's List", "Research Assistant", "Published 2 papers"],
	},
	{
		degree: "Bachelor of Science in Software Engineering",
		institution: "MIT",
		period: "2012 - 2016",
		description: "Focus on algorithms, data structures, and software architecture. GPA: 3.8/4.0",
		achievements: ["Summa Cum Laude", "ACM Member", "Hackathon Winner"],
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

// Get all education
export const getEducation = (): EducationEntry[] => {
	return educationEntries;
};

// Get all certifications
export const getCertifications = (): Certification[] => {
	return certifications;
};
