"use client";

import Paper from "@/components/common/UI/Paper";
import Stack from "@/components/common/UI/Stack";
import Typography from "@/components/common/UI/Typography";
import Button from "../common/UI/Button";
import Footer from "./Footer";
import {
    Home,
    CalendarDays,
    Coins,
    Lightbulb,
    ShoppingCart,
    ListTodo,
    MessagesSquare,
    MapPin,
    Ambulance,
} from "lucide-react";

const menu = [
    { label: "Inicio", icon: Home },
    { label: "Horario", icon: CalendarDays },
    { label: "Finanzas", icon: Coins },
    { label: "Servicios", icon: Lightbulb },
    { label: "Lista de Compras", icon: ShoppingCart },
    { label: "Pendientes", icon: ListTodo },
    { label: "Notas", icon: MessagesSquare },
    { label: "Ubicaciones", icon: MapPin },
    { label: "Emergencias", icon: Ambulance },
];

export default function Sidebar() {
    return (
        <Paper className="
            h-screen
            w-64
            rounded-none
            border-r
            p-4
            flex
            flex-col
        ">
            <Typography
                variant="h2"
                className="
                    mb-6
                    text-primary
                    text-center
                "
            >
                Life Control
            </Typography>

            <Stack spacing={2} className="flex-1">
                {menu.map(item => {
                    const Icon = item.icon;

                    return (
                        <Button variant="ghost"
                            key={item.label}
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                p-3
                                cursor-pointer
                            "
                        >
                            <Icon size={22} />

                            <Typography>
                                {item.label}
                            </Typography>
                        </Button>
                    );
                })}
            </Stack>
            <Footer />
        </Paper>
    );
}