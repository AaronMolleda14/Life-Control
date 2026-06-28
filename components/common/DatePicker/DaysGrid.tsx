"use client";

import dayjs, { Dayjs } from "dayjs";
import { getCalendarDays } from "@/utils/getCalendarDays";

interface CalendarGridProps {
    currentMonth: Dayjs;
    selectedDate?: Dayjs | null;
    onSelect: (date: Dayjs) => void;
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
}: CalendarGridProps) {

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
                {days.map((date, index) => {

                    if (!date) {
                        return (
                            <div
                                key={index}
                                className="h-10 w-10"
                            />
                        );
                    }

                    const isToday =date.isSame(dayjs(), "day");
                    const isSelected = selectedDate?.isSame(date, "day");

                    return (
                        <button
                            key={date.toString()}
                            onClick={() => onSelect(date)}
                            className={`
                                h-10
                                w-10
                                rounded-full
                                transition-all
                                cursor-pointer

                                hover:bg-primary/10


                                ${isSelected
                                    ? "bg-primary text-white"
                                    : ""
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
                            {date.date()}
                        </button>
                    );
                })}
            </div>

        </div>
    );
}