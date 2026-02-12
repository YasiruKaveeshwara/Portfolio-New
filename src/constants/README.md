# Portfolio Constants Guide

This folder contains all the configuration and content data for your portfolio website. By centralizing all information here, you can easily update your portfolio details without touching component files.

## File Structure

### 📄 `personal.ts`

**Your personal information**

- Full name
- Title/Professional role
- Contact information (email, phone, location)
- Social media links
- Bio/Professional summary
- Availability status
- Personal interests/likes

**Usage:** Update this when you change your name, contact info, or professional details.

### 📄 `about.ts`

**About section content**

- Statistics (years of experience, projects completed, etc.)
- Professional description
- Key highlights with icons

**Usage:** Modify stats and descriptions to match your experience level.

### 📄 `projects.ts`

**Your portfolio projects**

- Project titles and descriptions
- Technologies/tags
- Project images (URLs)
- Live demo and GitHub links
- Featured/non-featured status

**Usage:** Add, remove, or update projects. Set `featured: true` to show projects on the homepage.

### 📄 `skills.ts`

**Technical skills organized by category**

- Frontend skills
- Backend skills
- DevOps/Infrastructure
- Tools
- Soft skills

**Usage:** Add/remove skills and categories as needed. Skills are organized by technology area.

### 📄 `experience.ts`

**Work experience timeline**

- Job titles
- Companies
- Employment periods
- Job descriptions
- Technologies used

**Usage:** Add new jobs at the top (most recent first), and update current experience details.

### 📄 `education.ts`

**Educational background**

- Degrees and institutions
- Study periods
- Academic descriptions
- Achievements/honors
- Certifications

**Usage:** Add your degrees and certifications with dates and achievements.

### 📄 `contact.ts`

**Contact information and form settings**

- Email, phone, location
- Social media links with icons
- Form messages (success/error)
- Availability statement

**Usage:** Update contact details and customize form response messages.

### 📄 `index.ts`

**Central export file**

- Exports all constants from other files
- Provides convenient imports for components

**Usage:** Import from this file in your components for easy access to all constants.

---

## How to Use

### In Components

Instead of hardcoding data, import from constants:

```tsx
// ❌ Don't do this (hardcoded)
const projects = [
  { title: "My Project", ... }
];

// ✅ Do this (from constants)
import { projects } from "../constants";
```

### Adding New Information

1. **Edit the relevant file** (e.g., `projects.ts` for new project)
2. **Components automatically update** - no component changes needed!
3. **Type-safe** - TypeScript interfaces ensure consistency

### Example: Adding a New Project

```typescript
// In src/constants/projects.ts
export const projects: Project[] = [
	// ... existing projects
	{
		title: "New Project Name",
		description: "What this project does",
		tags: ["React", "TypeScript", "Node.js"],
		image: "https://...",
		link: "https://...",
		github: "https://...",
		featured: true, // Show on homepage
	},
];
```

### Example: Updating Personal Info

```typescript
// In src/constants/personal.ts
export const personalInfo = {
	fullName: "Your Name",
	email: "your.email@example.com",
	social: {
		github: "https://github.com/yourprofile",
		linkedin: "https://linkedin.com/in/yourprofile",
		// ... etc
	},
};
```

---

## Key Features

✨ **Centralized Data** - All content in one place  
🔄 **Easy Updates** - No component edits needed  
🎨 **Type-Safe** - TypeScript interfaces for consistency  
📦 **Modular** - Organized by content type  
🚀 **Scalable** - Add helpers/functions for complex logic  
🔗 **Reusable** - Import anywhere in your app

---

## Best Practices

1. **Keep data structure consistent** - Don't modify TypeScript interfaces unless necessary
2. **Update one file at a time** - Easier to track changes
3. **Use realistic URLs** - For project images and links
4. **Keep descriptions concise** - Match your current portfolio theme
5. **Update dates regularly** - Keep experience and timeline current

---

## Component Integration

These constants are used by:

- `Hero.tsx` → Uses `personalInfo` for name, bio, social links
- `About.tsx` → Uses `aboutStats`, `highlights`
- `Projects.tsx` → Uses `projects`, `getFeaturedProjects()`
- `Skills.tsx` → Uses `skillCategories`
- `Experience.tsx` → Uses `experiences`
- `Education.tsx` → Uses `educationEntries`, `certifications`
- `Contact.tsx` → Uses `contactInfo`, `contactFormMessages`

---

## Troubleshooting

### Changes not showing?

- Clear browser cache (Ctrl+Shift+Delete)
- Restart the dev server
- Check TypeScript errors in console

### TypeScript errors?

- Ensure data matches the interface types
- Check for required vs optional fields
- Use `as const` for string literals if needed

---

**Last Updated:** January 27, 2025  
**Created for:** Easy portfolio content management
