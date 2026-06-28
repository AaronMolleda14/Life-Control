"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export default function useCalendar(initialDate?: Dayjs) {

    const [currentMonth, setCurrentMonth] = useState(initialDate ?? dayjs());
    const [view, setView] = useState<"days" | "months" | "years">("days");

    return {
        currentMonth,
        setCurrentMonth,

        view,
        setView,
    };
}