"use client";

import { useRef, useState } from "react";
import { Dayjs } from "dayjs";

import TextField from "@/components/common/UI/TextField";
import Popover from "@/components/common/UI/Popover";
import Paper from "@/components/common/UI/Paper";
import CalendarView from "../Calendar/CalendarView";
import useClickOutside from "@/hooks/useClickOutside";

import { Calendar } from "lucide-react";

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

    const popoverRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);

    const inputWidth = inputRef.current?.offsetWidth ?? 0;

    useClickOutside(popoverRef, () => {
        setOpen(false);
    });

    return (
        <div
            ref={inputRef}
            className="w-full"
        >
            <TextField
                label={label}
                readOnly

                value={value
                    ? value.format("DD/MM/YYYY")
                    : ""
                }

                rightElement={
                    <Calendar
                        size={20}
                        onClick={() => setOpen(true)}
                    />
                }

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

                    <CalendarView
                        value={value}
                        onChange={date => {
                            onChange?.(date);
                            setOpen(false);
                        }}
                    />

                </Paper>

            </Popover>

        </div>
    );
}