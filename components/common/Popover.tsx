"use client";

import {
    ReactNode,
    RefObject,
    useEffect,
    useState,
} from "react";

import Box from "./Box";
import Portal from "./Portal";

interface PopoverProps {
    open: boolean;
    anchorRef: RefObject<HTMLElement | null>;
    children: ReactNode;
}

export default function Popover({
    open,
    anchorRef,
    children,
}: PopoverProps) {
    const [position, setPosition] =
        useState({
            top: 0,
            left: 0,
        });

    useEffect(() => {
        if (!open || !anchorRef.current)
            return;

        const rect =
            anchorRef.current.getBoundingClientRect();

        setPosition({
            top: rect.bottom + window.scrollY + 8,
            left: rect.left + window.scrollX,
        });
    }, [open, anchorRef]);

    if (!open) return null;

    return (
        <Portal>
            <Box
                className="absolute z-50"
                style={{
                    top: position.top,
                    left: position.left,
                }}
            >
                {children}
            </Box>
        </Portal>
    );
}