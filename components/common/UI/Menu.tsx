"use client";

import Paper from "./Paper";

interface MenuProps {
    children: React.ReactNode;
}

export default function Menu({
    children,
}: MenuProps) {

    return (
        <Paper
            className="
                min-w-72
                max-w-96

                p-2

                flex
                flex-col
                gap-1
            "
        >
            {children}
        </Paper>
    );
}