"use client";

import { useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import TextField from "@/components/common/TextField";
import Popover from "@/components/common/Popover";
import Paper from "@/components/common/Paper";
import Box from "./Box";
import IconButton from "@/components/common/IconButton";

import DaysGrid from "./DaysGrid";
import MonthsGrid from "./MonthsGrid";
import YearsGrid from "./YearsGrid";

import useClickOutside from "@/hooks/useClickOutside";
import {
    Calendar,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

interface DatePickerProps {
    label: string;
    value?: Dayjs | null;
    onChange?: (date: Dayjs) => void;
}

export default function DatePicker({
    label,
    value,
    onChange,
}: DatePickerProps) {

    const [open, setOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(value ?? dayjs());
    const [view, setView] = useState<"days" | "months" | "years">("days")

    const popoverRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const inputWidth = inputRef.current?.offsetWidth ?? 0;

    useClickOutside(popoverRef, () => {
        setOpen(false);
    });

    return (
        <div ref={inputRef} className="w-full">

            <TextField
                label={label}
                readOnly
                value={value
                    ? value.format("DD/MM/YYYY")
                    : ""
                }
                rightElement={<Calendar size={20} onClick={() => setOpen(true)}/>}
                onClick={() => setOpen(true)}
            />

            <Popover
                open={open}
                anchorRef={inputRef}
            >
                <Paper
                    ref={popoverRef}
                    className="p-4"
                    style={{ width: inputWidth }}
                >
                    <Box className="
                        mb-1
                        flex
                        items-center
                        justify-between
                    ">

                        <IconButton
                            onClick={() => setCurrentMonth(
                                prev => prev.subtract(1, "month")
                            )}
                            className="
                                cursor-pointer
                            "
                        >
                            <ChevronLeft />
                        </IconButton>

                        <Box className="flex gap-2">
                            <button
                                onClick={() => setView("months")}
                                className="
                                    font-medium
                                    cursor-pointer
                                    hover:text-primary
                                "
                            >
                                {currentMonth.format("MMMM")}
                            </button>

                            <button
                                onClick={() => setView("years")}
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
                            onClick={() => setCurrentMonth(prev =>
                                prev.add(1, "month")
                            )}
                            className="
                                cursor-pointer
                            "
                        >
                            <ChevronRight />
                        </IconButton>

                    </Box>

                    {view === "days" && (
                        <DaysGrid
                            currentMonth={currentMonth}
                            selectedDate={value}
                            onSelect={date => {
                                onChange?.(date);
                                setOpen(false);
                            }}
                        />
                    )}

                    {view == "months" && (
                        <MonthsGrid 
                            selectedMonth={currentMonth.month()}
                            onSelect={month => {
                                setCurrentMonth(currentMonth.month(month));

                                setView("days");
                            }}
                        />
                    )}

                    {view === "years" && (
                        <YearsGrid
                            selectedYear={currentMonth.year()}
                            onSelect={year => {
                                setCurrentMonth(
                                    currentMonth.year(year)
                                );

                                setView("months");
                            }}
                        />
                    )}
                    

                </Paper>
            </Popover>

        </div>
    );
}