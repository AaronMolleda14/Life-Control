"use client";

import {
    HTMLAttributes,
    ReactNode,
} from "react";

import Paper from "../UI/Paper";
import Typography from "./Typography";

interface CardProps
    extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    date?: string;
    subtitle?: string;
    icon?: ReactNode;
    actions?: ReactNode;
    children: ReactNode;

    align?: "left" | "center" | "right";
}

const alignClasses = {
    left: "items-start text-left justify-start",
    center: "items-center text-center justify-center",
    right: "items-end text-right justify-end",
};

export default function Card({
    title,
    date,
    subtitle,
    icon,
    actions,
    children,

    align = "left",

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

            {(title || subtitle || icon || actions || date) && (
                <div className="
                    flex
                    justify-between
                    gap-4
                ">

                    {/* Icono + Titulo + Subtitulo */}
                    <div className="
                        flex-1
                    ">
                        <div className={`
                            flex
                            items-center
                            gap-3

                            ${alignClasses[align]}
                        `}>
                            {icon && (
                                <div className="text-primary">
                                    {icon}
                                </div>
                            )}

                            {title && (
                                <Typography className="
                                    text-xl
                                    font-semibold
                                ">
                                    {title}
                                </Typography>
                            )}
                        </div>

                        {subtitle && (
                            <Typography className="
                                mt-1
                                text-sm
                                text-foreground-muted
                            ">
                                {subtitle}
                            </Typography>
                        )}
                    </div>

                    {/* Fecha */}
                    {date && (
                        <Typography className="
                            text-md
                            text-foreground-muted
                        ">
                            {date}
                        </Typography>
                    )}

                    {actions}
                </div>
            )}

            <div className={`
                flex
                flex-col

                ${alignClasses[align]}
            `}>
                {children}
            </div>
        </Paper>
    );
}