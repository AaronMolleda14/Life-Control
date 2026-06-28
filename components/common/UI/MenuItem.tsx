"use client";

import { LucideIcon } from "lucide-react";

interface MenuItemProps {
    icon?: LucideIcon;
    children: React.ReactNode;
    onClick?: () => void;
}

export default function MenuItem({
    icon: Icon,
    children,
    onClick,
}: MenuItemProps) {

    return (
        <button
            onClick={onClick}
            className="
                w-full

                flex
                items-center
                gap-3

                rounded-xl

                p-3

                transition-colors

                hover:bg-primary/10

                cursor-pointer
            "
        >
            {Icon && <Icon size={18} />}

            {children}
        </button>
    );
}