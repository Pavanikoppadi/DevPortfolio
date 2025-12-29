import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("pk_theme");
    if (stored === "dark") {
      setIsDark(true);
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("pk_theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("pk_theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("pk_theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={18} className="text-foreground" />
      ) : (
        <Moon size={18} className="text-foreground" />
      )}
    </button>
  );
};
