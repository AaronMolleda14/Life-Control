"use client"
import { useState } from "react";
import ContentView from "@/components/common/ContentView/ContentView"
import Movements from "./Movements";
import FinanceKPIs from "./FinanceKPIs";

export default function FinanceContent() {
    const [tab, setTab] = useState("movements");

    return (
        <ContentView
                value={tab}
                onChange={setTab}
                tabs={[
                    { value: "movements", label: "Movimientos" },
                    { value: "table", label: "Tabla" },
                    { value: "analytics", label: "KPIs" },
                ]}
            >
                {tab === "movements" && (
                    <Movements />
                )}

                {tab === "table" && (
                    <FinanceKPIs />
                )}

                {tab === "analytics" && (
                    <FinanceKPIs />
                )}
            </ContentView>
    )
}