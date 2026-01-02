/**
 * =============================================================================
 * ThemeToggle.tsx - Light/Dark Mode Switcher
 * =============================================================================
 * 
 * A toggle button component that switches between light and dark themes.
 * Theme preference is persisted to localStorage for returning visitors.
 * 
 * HOW IT WORKS:
 * - Light theme: Adds "light" class to <html> element
 * - Dark theme: Removes "light" class (dark is default in CSS)
 * - Storage key: "pk_theme" in localStorage
 * 
 * ICONS:
 * - Sun icon shown in dark mode (click to go light)
 * - Moon icon shown in light mode (click to go dark)
 */

// =============================================================================
// IMPORTS
// =============================================================================

// Lucide icons for visual toggle representation
import { Moon, Sun } from "lucide-react";

// React hooks for state and side effects
import { useEffect, useState } from "react";

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * ThemeToggle Component
 * 
 * Renders a circular button that toggles the site theme.
 * Persists preference to localStorage for consistency across sessions.
 */
export const ThemeToggle = () => {
  // ==========================================================================
  // STATE
  // ==========================================================================
  
  /**
   * Track whether dark mode is currently active
   * Initialized to false (light mode default)
   */
  const [isDark, setIsDark] = useState(false);

  // ==========================================================================
  // EFFECTS
  // ==========================================================================
  
  /**
   * Initialize theme on component mount
   * 
   * Reads stored preference from localStorage and applies it.
   * If no preference exists, defaults to light mode.
   */
  useEffect(() => {
    // Read stored theme preference
    const stored = localStorage.getItem("pk_theme");
    
    // Apply dark mode if stored preference is "dark"
    if (stored === "dark") {
      setIsDark(true);
      document.documentElement.classList.remove("light");
    } else {
      // Default to light mode
      document.documentElement.classList.add("light");
      localStorage.setItem("pk_theme", "light");
    }
  }, []);

  // ==========================================================================
  // HANDLERS
  // ==========================================================================
  
  /**
   * Toggle between light and dark themes
   * 
   * Updates state, DOM class, and localStorage preference.
   */
  const toggleTheme = () => {
    // Flip the current state
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    // Apply theme to DOM and persist preference
    if (newIsDark) {
      // Switch to dark mode
      document.documentElement.classList.remove("light");
      localStorage.setItem("pk_theme", "dark");
    } else {
      // Switch to light mode
      document.documentElement.classList.add("light");
      localStorage.setItem("pk_theme", "light");
    }
  };

  // ==========================================================================
  // RENDER
  // ==========================================================================
  
  return (
    <button
      // Toggle theme on click
      onClick={toggleTheme}
      // Circular button with subtle background
      className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-300"
      // Accessibility label for screen readers
      aria-label="Toggle theme"
    >
      {/* Show Sun icon in dark mode, Moon icon in light mode */}
      {isDark ? (
        <Sun size={18} className="text-foreground" />
      ) : (
        <Moon size={18} className="text-foreground" />
      )}
    </button>
  );
};
