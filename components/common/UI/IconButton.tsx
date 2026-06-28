import { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    size?: "sm" | "md" | "lg";
}

export default function IconButton({
    children,
    className = "",
    size = "md",
    ...props
}: IconButtonProps) {
    const sizes = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
    };

    return (
        <button
            className={`
                inline-flex
                items-center
                justify-center
                rounded-full

                transition-all
                duration-200

                hover:bg-primary/10
                active:scale-95
                ${sizes[size]}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}