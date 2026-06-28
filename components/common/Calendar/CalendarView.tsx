"use client";

import { ReactNode } from "react";
import { Dayjs } from "dayjs";

import Box from "../UI/Box";
import DaysGrid from "./DaysGrid";
import MonthsGrid from "./MonthsGrid";
import YearsGrid from "./YearsGrid";
import CalendarHeader from "./CalendarHeader";

import useCalendar from "@/hooks/useCalendar";

interface CalendarViewProps {
    value?: Dayjs | null;

    onChange?: (
        date: Dayjs
    ) => void;

    renderDay?: (
        date: Dayjs
    ) => ReactNode;
}

export default function CalendarView({
    value,
    onChange,
    renderDay,
}: CalendarViewProps) {

    const {
        currentMonth,
        setCurrentMonth,

        view,
        setView,
    } = useCalendar(value ?? undefined);

    return (
        <Box className="w-full">
            <CalendarHeader
                currentMonth={currentMonth}

                onPrevious={() =>
                    setCurrentMonth(
                        prev =>
                            prev.subtract(
                                1,
                                "month"
                            )
                    )
                }

                onNext={() =>
                    setCurrentMonth(
                        prev =>
                            prev.add(
                                1,
                                "month"
                            )
                    )
                }

                onMonthsClick={() =>
                    setView("months")
                }

                onYearsClick={() =>
                    setView("years")
                }
            />

            {view === "days" && (
                <DaysGrid
                    currentMonth={
                        currentMonth
                    }

                    selectedDate={value}

                    onSelect={date => {
                        onChange?.(date);
                    }}

                    renderDay={renderDay}
                />
            )}

            {view === "months" && (
                <MonthsGrid
                    selectedMonth={
                        currentMonth.month()
                    }

                    onSelect={month => {

                        setCurrentMonth(
                            currentMonth.month(
                                month
                            )
                        );

                        setView("days");
                    }}
                />
            )}

            {view === "years" && (
                <YearsGrid
                    selectedYear={
                        currentMonth.year()
                    }

                    onSelect={year => {

                        setCurrentMonth(
                            currentMonth.year(
                                year
                            )
                        );

                        setView("months");
                    }}
                />
            )}

        </Box>
    );
}