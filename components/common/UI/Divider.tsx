interface DividerProps {
    orientation?: "horizontal" | "vertical";
    className?: string;
}

export default function Divider({
    orientation = "horizontal",
    className
}: DividerProps) {
    return (
        <div className={`
            bg-border

            ${orientation === "horizontal"
                ? "h-px w-full"
                : "w-px self-stretch"
            }

            ${className}
        `}/>
    )
}