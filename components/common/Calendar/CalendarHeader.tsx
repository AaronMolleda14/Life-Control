"use client";

import { Dayjs } from "dayjs";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import Box from "../UI/Box";
import IconButton from "../UI/IconButton";

interface CalendarHeaderProps {
    currentMonth: Dayjs;

    onPrevious: () => void;
    onNext: () => void;

    onMonthsClick: () => void;
    onYearsClick: () => void;
}

export default function CalendarHeader({
    currentMonth,
    onPrevious,
    onNext,
    onMonthsClick,
    onYearsClick,
}: CalendarHeaderProps) {

    return (
        <Box className="
            mb-4

            flex
            items-center
            justify-between
        ">

            <IconButton
                onClick={onPrevious}
                className="cursor-pointer"
            >
                <ChevronLeft />
            </IconButton>

            <Box className="flex gap-2">

                <button
                    onClick={onMonthsClick}
                    className="
                        font-medium
                        cursor-pointer

                        hover:text-primary
                    "
                >
                    {currentMonth.format("MMMM")}
                </button>

                <button
                    onClick={onYearsClick}
                    className="
                        font-medium
                        cursor-pointer

                        hover:text-primary
                    "
                >
                    {currentMonth.format("YYYY")}
                </button>

            </Box>

            <IconButton
                onClick={onNext}
                className="cursor-pointer"
            >
                <ChevronRight />
            </IconButton>

        </Box>
    );
}