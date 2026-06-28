import MainLayout from "@/components/layout/MainLayout"
import FinanceContent from "@/features/Finance/FinanceContent"

export default function Dashboard() {
    

    return (
        <MainLayout headerTitle="Finanzas">
            <FinanceContent />
        </MainLayout> 
    )
}