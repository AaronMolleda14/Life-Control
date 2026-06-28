import {
    HTMLAttributes,
    ReactNode,
    forwardRef
} from "react";

interface PaperProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    elevation?: "none" | "sm" | "md" | "lg";
}

const elevations = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
};

const Paper = forwardRef<HTMLDivElement, PaperProps>(
    (
        {
            children,
            className = "",
            elevation = "md",
            ...props
        },  
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={`
                    rounded-2xl
                    border
                    border-border
                    bg-surface
                    ${elevations[elevation]}
                    ${className}
                `}
                {...props}
            >
                {children}
            </div>
        );
    }
);

export default Paper;