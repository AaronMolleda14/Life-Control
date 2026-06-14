"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newValue = !isDark;

    setIsDark(newValue);

    if (newValue) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        flex items-center gap-2
        rounded-full
        border border-border
        bg-surface
        px-4 py-2
        text-sm
        transition-colors
        hover:bg-primary hover:text-white
      "
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}