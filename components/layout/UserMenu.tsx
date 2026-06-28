"use client";

import { useRef, useState } from "react";

import Avatar from "@/components/common/UI/Avatar";
import Box from "@/components/common/UI/Box";
import Divider from "@/components/common/UI/Divider";
import Menu from "@/components/common/UI/Menu";
import MenuItem from "@/components/common/UI/MenuItem";
import Popover from "@/components/common/UI/Popover";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Typography from "@/components/common/UI/Typography";
import LanguageMenu from "./LanguageMenu";

import useClickOutside from "@/hooks/useClickOutside";

import {
    User,
    LogOut,
} from "lucide-react";

export default function     UserMenu() {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("es");

    const anchorRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside(menuRef, () => {
        setOpen(false);
    });

    return (
        <Box
            ref={anchorRef}
            className="relative"
        >
            <Avatar
                name="Aaron Molleda"
                onClick={() =>
                    setOpen(prev => !prev)
                }
            />

            <Popover
                open={open}
                anchorRef={anchorRef}
                horizontalAlign="right"
            >
                <div ref={menuRef}>
                    <Menu>
                        {/* Información Usuario */}
                        <Box className="p-3">
                            <Typography className="font-semibold">
                                Aaron Molleda
                            </Typography>

                            <Typography
                                variant="note"
                                className="text-foreground-muted"
                            >
                                aaron@email.com
                            </Typography>
                        </Box>

                        <Divider />

                        {/* Perfil */}
                        <MenuItem
                            icon={User}
                            onClick={() => {
                                setOpen(false);

                                // navegar al perfil
                            }}
                        >
                            Mi Perfil
                        </MenuItem>

                        <Divider />

                        {/* Ajustes */}
                        <Box className="px-3 pt-2">
                            <Typography
                                variant="note"
                                className="
                                    text-foreground-muted
                                "
                            >
                                Tema
                            </Typography>
                        </Box>

                        <Box className="p-2">
                            <ThemeToggle />
                        </Box>

                        {/* Idioma */}
                        <LanguageMenu
                            currentLanguage={language}
                            onChangeLanguage={language => {
                                setLanguage(language);

                                // Aquí posteriormente
                                // cambiarás el idioma real
                                // usando i18next.
                            }}
                        />

                        <Divider />

                        {/* Logout */}
                        <MenuItem
                            icon={LogOut}
                            onClick={() => {
                                setOpen(false);

                                // cerrar sesión
                            }}
                        >
                            Cerrar Sesión
                        </MenuItem>
                    </Menu>
                </div>
            </Popover>
        </Box>
    );
}