import { ReactNode, ElementType } from "react";

type TypographyVariant =
    | "h1"
    | "h2"
    | "h3"
    | "body"
    | "note"
    | "caption"
    | "label"
    | "link"
    | "button";

interface TypographyProps {
    children: ReactNode;
    variant?: TypographyVariant;
    className?: string;
}

const variants: Record<TypographyVariant, string> = {
    h1: "text-4xl font-bold text-foreground",
    h2: "text-3xl font-semibold text-foreground",
    h3: "text-2xl font-medium text-foreground",
    body: "text-base font-normal text-foreground",
    note: "text-sm font-medium text-foreground",
    caption: "text-xs font-normal text-foreground-muted",
    label: "text-sm font-medium text-foreground",
    link: `text-sm font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer`,
    button: "text-base font-medium",
};

const elements: Record<TypographyVariant, ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    body: "p",
    note: "p",
    caption: "span",
    label: "label",
    link: "span",
    button: "span",
};

export default function Typography({
    children,
    variant = "body",
    className = "",
}: TypographyProps) {
    const Component = elements[variant];

    return (
        <Component
            className={`
                ${variants[variant]}
                ${className}
            `}
        >
            {children}
        </Component>
    );
}