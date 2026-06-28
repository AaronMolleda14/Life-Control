import Stack from "@/components/common/UI/Stack"
import Card from "@/components/common/UI/Card"
import Typography from "@/components/common/UI/Typography"
import { TrendingUp } from "lucide-react"

export default function Movements() {
    return (
        <Stack spacing={4} direction="row">
            <Card
                title="Ingresos"
                icon={<TrendingUp size={28} />}
            >
                <Typography variant="h2">
                    +$12,500
                </Typography>
            </Card>

            <Card
                title="Ingresos"
                icon={<TrendingUp size={28} />}
            >
                <Typography variant="h2">
                    +$12,500
                </Typography>
            </Card>

            <Card
                title="Ingresos"
                icon={<TrendingUp size={28} />}
            >
                <Typography variant="h2">
                    +$12,500
                </Typography>
            </Card>
        </Stack>
    )
}