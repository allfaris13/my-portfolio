"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-900/40 dark:bg-white/10 border border-purple-500/20 hover:border-purple-500 transition-all duration-300 group"
            aria-label="Toggle dark mode"
        >
            {theme === "dark" ? (
                <Sun size={20} className="text-purple-400 group-hover:text-purple-300 group-hover:rotate-45 transition-all duration-500" />
            ) : (
                <Moon size={20} className="text-purple-600 group-hover:text-purple-700 -rotate-12 group-hover:rotate-0 transition-all duration-500" />
            )}
        </button>
    );
};

export default ThemeToggle;
