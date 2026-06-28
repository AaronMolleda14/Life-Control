"use client";

import dayjs from "dayjs";

interface MonthGridProps {
    selectedMonth: number;
    onSelect: (month: number) => void;
}

export default function MonthsGrid({
    selectedMonth,
    onSelect,
}: MonthGridProps) {

    const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    return (
        <div className="grid grid-cols-3 gap-2">
            {months.map((month, index) => {

                const isSelected =
                    selectedMonth === index;

                return (
                    <button
                        key={month}
                        onClick={() => onSelect(index)}
                        className={`
                            rounded-xl
                            p-3
                            transition-all
                            cursor-pointer

                            ${
                                isSelected
                                    ? "bg-primary text-white"
                                    : "hover:bg-primary/10"
                            }
                        `}
                    >
                        {month.slice(0, 3)}
                    </button>
                );
            })}
        </div>
    );
}