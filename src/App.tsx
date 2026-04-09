import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";

// Lazy-load particles so it never blocks first paint
const ParticlesBackground = lazy(() => import("./components/ParticlesBackground"));

// Route-level code splitting — each page is its own JS chunk
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Minimal full-screen loading placeholder (matches background colour)
const PageLoader = () => <div className='min-h-screen bg-background' />;

const App = () => (
	<TooltipProvider>
		<Suspense fallback={null}>
			<ParticlesBackground />
		</Suspense>
		<Toaster />
		<Sonner />
		<BrowserRouter>
			<Suspense fallback={<PageLoader />}>
				<Routes>
					<Route path='/' element={<Index />} />
					<Route path='/skills' element={<SkillsPage />} />
					<Route path='/projects' element={<ProjectsPage />} />
					<Route path='/resume' element={<ResumePage />} />
					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	</TooltipProvider>
);

export default App;
