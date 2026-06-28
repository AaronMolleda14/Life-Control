"use client";

import dayjs, { Dayjs } from "dayjs";
import { getCalendarDays } from "@/utils/getCalendarDays";

interface DaysGridProps {
    currentMonth: Dayjs;
    selectedDate?: Dayjs | null;
    onSelect: (date: Dayjs) => void;
    renderDay?: (date: Dayjs) => React.ReactNode;
}

const WEEK_DAYS = [
    "Lu",
    "Ma",
    "Mi",
    "Ju",
    "Vi",
    "Sa",
    "Do",
];

export default function DaysGrid({
    currentMonth,
    selectedDate,
    onSelect,
    renderDay,
}: DaysGridProps) {

    const days = getCalendarDays(currentMonth);

    return (
        <div className="space-y-2">

            <div className="grid grid-cols-7 gap-1">
                {WEEK_DAYS.map(day => (
                    <div key={day} className="
                        text-center
                        text-sm
                        font-medium
                        text-muted
                    ">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => {

                    if (!day) {
                        return (
                            <div
                                key={index}
                                className="h-10 w-10"
                            />
                        );
                    }

                    const isToday =day.isSame(dayjs(), "day");
                    const isSelected = selectedDate?.isSame(day, "day");

                    return (
                        <button
                            key={day.toString()}
                            onClick={() => onSelect(day)}
                            className={`
                                h-10
                                w-10
                                rounded-full
                                transition-all
                                cursor-pointer

                                ${isSelected
                                    ? "bg-primary text-white hover:bg-primary-hover"
                                    : "hover:bg-primary/10"
                                }

                                ${!isSelected && isToday
                                    ? "border border-primary"
                                    : ""
                                }

                                ${!isSelected
                                    ? "hover:bg-surface-hover"
                                    : ""
                                }
                            `}
                        >
                            <span>
                                {day.date()}
                            </span>

                            {renderDay?.(day)}
                        </button>
                    );
                })}
            </div>

        </div>
    );
}