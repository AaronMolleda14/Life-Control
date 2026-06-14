import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export default function TextField({
    label,
    error,
    className  = "",
    ...props
}: TextFieldProps) {
    return (
        <div
            className="flex flex-col gap-2"
        >
            {label && (
                <label
                    className="text-sm font-medium text-foreground"
                >
                    {label}
                </label>
            )}

            <input
                className={`
                    h-12
                    rounded-xl
                    border
                    border-border
                    bg-background
                    px-4
                    outline-none
                    transition-colors
                    
                    focus:border-primary

                    ${error ? "border-danger" : ""}
                    ${className}
                `}
                {...props}
            />

            {error && (
                <span
                    className="text-sm text-danger"
                >
                    {error}
                </span>
            )}

        </div>
    )
}