"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.documentElement
                .classList.add("dark");

            setIsDark(true);
        }
    }, []);

    function changeTheme(dark: boolean) {
        setIsDark(dark);

        if (dark) {
            document.documentElement.classList.add("dark");

            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");

            localStorage.setItem("theme", "light");
        }
    }

    return (
        <div className="
            flex
            w-full

            rounded-xl

            border
            border-border
        ">
            <button
                onClick={() =>
                    changeTheme(false)
                }
                className={`
                    flex-1

                    flex
                    items-center
                    justify-center
                    gap-2

                    rounded-l-lg

                    px-4
                    py-2

                    transition-all

                    cursor-pointer

                    ${!isDark
                        ? `bg-primary text-white shadow-sm`
                        : `hover:bg-primary/10`
                    }
                `}
            >
                <Sun size={18} />
                Claro
            </button>

            <button
                onClick={() =>
                    changeTheme(true)
                }
                className={`
                    flex-1

                    flex
                    items-center
                    justify-center
                    gap-2

                    rounded-r-lg

                    px-4
                    py-2

                    transition-all

                    cursor-pointer

                    ${isDark 
                        ? `bg-primary text-white shadow-sm`
                        : `hover:bg-primary/10`
                    }
                `}
            >
                <Moon size={18} />
                Oscuro
            </button>
        </div>
    );
}