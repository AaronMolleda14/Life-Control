"use client";

import Typography from "@/components/common/UI/Typography";
import NotificationButton from "./NotificationButton";
import UserMenu from "./UserMenu";
import Stack from "../common/UI/Stack";

export default function Header() {
    return (
        <header className="
            h-16
            border-b
            border-border
            bg-surface

            flex
            items-center
            justify-between

            px-6
        ">
            <Typography variant="h3">
                Dashboard
            </Typography>

            <Stack spacing={4} direction="row">
                <NotificationButton />
                <UserMenu />
            </Stack>
        </header>
    );
}