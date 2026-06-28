"use client";
import { HTMLAttributes, ReactNode } from "react";
import Paper from "../UI/Paper";

interface CardProps
    extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    icon?: ReactNode;
    actions?: ReactNode;
    children: ReactNode;
}

export default function Card({
    title,
    subtitle,
    icon,
    actions,
    children,
    className = "",
    ...props
}: CardProps) {
    return (
        <Paper
            className={`
                p-4
                transition-all
                duration-200
                hover:border-primary

                ${className}
            `}
            {...props}
        >
            {(title || subtitle || icon || actions) && (
                <div className="
                    flex
                    items-start
                    justify-between
                ">
                    <div className="
                        flex
                        items-center
                        gap-3
                    ">
                        {icon && (
                            <div className="
                                text-primary
                            ">
                                {icon}
                            </div>
                        )}

                        <div>
                            {title && (
                                <h3 className="
                                    font-semibold
                                    text-lg
                                ">
                                    {title}
                                </h3>
                            )}

                            {subtitle && (
                                <p className="
                                    text-sm
                                    text-foreground-muted
                                ">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>
                    {actions}
                </div>
            )}
            {children}
        </Paper>
    );
}