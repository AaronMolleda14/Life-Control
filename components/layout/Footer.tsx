"use client";

import Typography from "@/components/common/UI/Typography";

export default function Footer() {
    return (
        <footer className="
            border-t
            border-border
            p-4
            text-center
        ">
            <Typography
                variant="note"
                className="text-foreground-muted"
            >
                © 2026 Life Control
            </Typography>
        </footer>
    );
}