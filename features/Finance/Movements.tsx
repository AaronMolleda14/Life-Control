import Stack from "@/components/common/UI/Stack"
import Card from "@/components/common/UI/Card"
import Typography from "@/components/common/UI/Typography"
import CalendarView from "@/components/common/Calendar/CalendarView"

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { TrendingUp, TrendingDown, ShoppingCart } from "lucide-react"
import Divider from "@/components/common/UI/Divider";

export default function Movements() {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs())

    return (
        <Stack spacing={4} direction="row">
            {/* Cards y Calendario */}
            <Stack spacing={4} className="w-[22rem]">
                <Stack spacing={4} direction="row">
                    <Card
                        title="Ingresos"
                        icon={<TrendingUp size={28} />}
                        align="center"
                        className="w-full"
                    >
                        <Typography variant="h3">
                            +$12,500.00
                        </Typography>
                    </Card>

                    <Card
                        title="Gastos"
                        icon={<TrendingDown size={28} />}
                        align="center"
                        className="w-full"
                    >
                        <Typography variant="h3">
                            -$3,300.00
                        </Typography>
                    </Card>
                </Stack>

                <Card title="Movimientos del Mes" align="center">
                    <CalendarView
                        value={selectedDate}
                        onChange={setSelectedDate}
                    />
                </Card>
            </Stack>

            <Divider orientation="vertical" />

            {/* Detalle del Día */}
            <Stack spacing={4} className="flex-1">
                <Typography variant="h3">
                    Movimientos del Día DD/MMM/YYYY
                </Typography>

                <Divider className="mb-1"/>
                
                <Stack spacing={4} direction="row">
                    <Card
                        title="Supermercado"
                        date="24 Junio 2026"
                        icon={<ShoppingCart />}
                        className="w-full"
                    >
                        <Typography className="text-danger">
                            -$1,250.00
                        </Typography>

                        <Typography variant="note">
                            Walmart
                        </Typography>
                    </Card>

                    <Card
                        title="Saldo Antes y Después"
                        align="center"
                        className="w-[24rem]"
                    >
                        <Typography>
                            {"$20,350.00 -> $19,100.00"}
                        </Typography>
                    </Card>
                </Stack>
                
            </Stack>
        </Stack>
    )
}