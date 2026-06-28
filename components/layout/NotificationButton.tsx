"use client";

import { useRef, useState } from "react";

import Box from "@/components/common/UI/Box";
import Divider from "@/components/common/UI/Divider";
import Menu from "@/components/common/UI/Menu";
import Popover from "@/components/common/UI/Popover";
import Typography from "@/components/common/UI/Typography";

import useClickOutside from "@/hooks/useClickOutside";

import {
    Bell,
    CheckCheck,
} from "lucide-react";

interface Notification {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    isRead: boolean;
}

export default function NotificationButton() {

    const [open, setOpen] = useState(false);
    const [notifications, setNotifications] =
        useState<Notification[]>([
            {
                id: "1",
                title: "Pendiente vencido",
                description:
                    "Tienes un pendiente vencido.",
                createdAt: "Hace 5 min",
                isRead: false,
            },
            {
                id: "2",
                title: "Lista de compras",
                description:
                    "Tu madre agregó productos.",
                createdAt: "Hace 1 hora",
                isRead: false,
            },
            {
                id: "3",
                title: "Recado",
                description:
                    "Hay comida en el refrigerador.",
                createdAt: "Ayer",
                isRead: true,
            },
        ]);

    const anchorRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside(menuRef, () => {
        setOpen(false);
    });

    const unreadCount =
        notifications.filter( n => !n.isRead).length;

    function markAllAsRead() {
        setNotifications(prev =>
            prev.map(notification => ({
                ...notification,
                isRead: true,
            }))
        );
    }

    function markAsRead(id: string) {
        setNotifications(prev =>
            prev.map(notification => notification.id === id
                ? {...notification, isRead: true,} 
                : notification
            )
        );
    }

    return (
        <Box
            ref={anchorRef}
            className="relative"
        >
            <button
                onClick={() =>
                    setOpen(prev => !prev)
                }
                className="
                    relative

                    flex
                    items-center
                    justify-center

                    h-10
                    w-10

                    rounded-full

                    hover:bg-primary/10

                    transition-colors

                    cursor-pointer
                "
            >
                <Bell size={22} />

                {unreadCount > 0 && (
                    <span className="
                        absolute
                        -top-1
                        -right-1

                        flex
                        items-center
                        justify-center

                        min-h-5
                        min-w-5

                        rounded-full

                        bg-danger

                        px-1

                        text-xs
                        text-white
                    ">
                        {unreadCount}
                    </span>
                )}
            </button>

            <Popover
                open={open}
                anchorRef={anchorRef}
                horizontalAlign="right"
            >
                <div ref={menuRef}>
                    <Menu>
                        {/* Header */}
                        <Box className="
                            flex
                            items-center
                            justify-between

                            p-3
                        ">

                            <Typography className="font-semibold">
                                Notificaciones
                            </Typography>

                            {unreadCount > 0 && (
                                <button
                                    onClick={markAllAsRead}
                                    className="
                                        flex
                                        items-center
                                        gap-1

                                        text-primary

                                        cursor-pointer
                                    "
                                >
                                    <CheckCheck
                                        size={16}
                                    />

                                    <Typography variant="note">
                                        Marcar todas
                                    </Typography>
                                </button>
                            )}
                        </Box>

                        <Divider />

                        {/* Lista */}
                        <Box className="
                            max-h-96
                            overflow-y-auto
                        ">
                            {notifications.length === 0 && (
                                <Typography
                                    className="
                                        p-4
                                        text-center
                                        text-foreground-muted
                                    "
                                >
                                    No tienes notificaciones.
                                </Typography>
                            )}

                            {notifications.map(
                                notification => (
                                    <button
                                        key={notification.id}
                                        onClick={() =>
                                            markAsRead(notification.id)
                                        }
                                        className={`
                                            w-full

                                            p-4

                                            text-left

                                            transition-colors

                                            hover:bg-primary/10

                                            cursor-pointer

                                            ${!notification.isRead
                                                ? "bg-primary/5"
                                                : ""
                                            }
                                        `}
                                    >
                                        <Box className="
                                            flex
                                            gap-3
                                        ">
                                            {!notification.isRead && (
                                                <div className="
                                                    mt-2

                                                    h-2
                                                    w-2

                                                    rounded-full

                                                    bg-primary
                                                " />
                                            )}

                                            <Box>
                                                <Typography
                                                    className="
                                                        font-semibold
                                                    "
                                                >
                                                    {notification.title}
                                                </Typography>

                                                <Typography
                                                    variant="note"
                                                    className="
                                                        text-foreground-muted
                                                    "
                                                >
                                                    {notification.description}
                                                </Typography>

                                                <Typography
                                                    variant="note"
                                                    className="
                                                        mt-2

                                                        text-foreground-muted
                                                    "
                                                >
                                                    {notification.createdAt}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </button>
                                )
                            )}
                        </Box>
                    </Menu>
                </div>
            </Popover>
        </Box>
    );
}