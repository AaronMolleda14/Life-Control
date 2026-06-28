import { HTMLAttributes, ReactNode } from "react";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    direction?: "row" | "column";
    spacing?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10;
}

const gapClasses = {
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
};

export default function Stack({
    children,
    className = "",
    direction = "column",
    spacing = 4,
    ...props
}: StackProps) {
    return (
        <div
            className={`
                flex
                ${direction === "row"
                    ? "flex-row"
                    : "flex-col"
                }
                ${gapClasses[spacing]}
                ${className}
            `}
            {...props}
        >
            {children}
        </div>
    );
}