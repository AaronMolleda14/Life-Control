import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "danger";
}

export default function Button({
    variant = "primary",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-hover',
        secondary: 'bg-surface text-foreground border border-border hover:bg-background',
        ghost: 'bg-transparent text-primary hover:bg-surface',
        danger: 'bg-danger text-white'
    };

    return (
        <button
            className={`
                h-12
                px-4
                rounded-xl
                font-medium
                cursor-pointer
                transition-colors
                disabled:opacity-50
                disabled:cursor-not-allowed
                ${variants[variant]}
                ${className}
            `}
            {...props}
        >
            {children}   
        </button>
    )
}