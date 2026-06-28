"use client";

import Typography from "@/components/common/UI/Typography";
import NotificationButton from "./NotificationButton";
import UserMenu from "./UserMenu";
import Stack from "../common/UI/Stack";

interface HeaderProps {
    title: string
}

export default function Header({
    title
}: HeaderProps) {
    return (
        <header className="
            h-17
            border-b
            border-border
            bg-surface

            flex
            items-center
            justify-between

            px-6
        ">
            <Typography variant="h2">
                {title}
            </Typography>

            <Stack spacing={4} direction="row">
                <NotificationButton />
                <UserMenu />
            </Stack>
        </header>
    );
}