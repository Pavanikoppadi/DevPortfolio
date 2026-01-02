/**
 * =============================================================================
 * main.tsx - Application Entry Point
 * =============================================================================
 * 
 * This file bootstraps the React application by:
 * 1. Importing the root App component
 * 2. Importing global CSS styles
 * 3. Mounting the app to the DOM
 * 
 * The app is rendered into the #root element defined in index.html
 */

// =============================================================================
// IMPORTS
// =============================================================================

// React DOM for rendering the app
import { createRoot } from "react-dom/client";

// Root application component
import App from "./App.tsx";

// Global styles including Tailwind and design tokens
import "./index.css";

// =============================================================================
// RENDER
// =============================================================================

/**
 * Mount the React application to the DOM
 * 
 * Uses createRoot (React 18+) for concurrent rendering features.
 * The "!" asserts that the root element exists (TypeScript non-null assertion).
 */
createRoot(document.getElementById("root")!).render(<App />);
