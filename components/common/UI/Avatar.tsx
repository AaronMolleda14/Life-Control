"use client";
import Image from "next/image";

interface AvatarProps {
    name: string;
    src?: string;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
}

const sizes = {
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-14 w-14 text-lg",
};

export default function Avatar({
    name,
    src,
    size = "md",
    onClick,
}: AvatarProps) {

    const initials = name
        .split(" ")
        .map(word => word[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <button
            onClick={onClick}
            className={`
                ${sizes[size]}

                rounded-full
                overflow-hidden

                bg-primary
                text-white

                flex
                items-center
                justify-center

                font-semibold

                transition-transform
                hover:scale-105

                cursor-pointer
            `}
        >
            {src ? (
                <Image
                    src={src}
                    alt={name}
                    className="h-full w-full object-cover"
                />
            ) : (
                initials
            )}
        </button>
    );
}