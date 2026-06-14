"use client";
import { InputHTMLAttributes, useState } from "react";

interface DateFieldProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export default function DateField({
    label,
    error,
    className = "",
    onChange,
    value,
    defaultValue,
    ...props
}: DateFieldProps) {
    const [isFocused, setIsFocused] = useState(false);

    const [internalValue, setInternalValue] = useState(
        defaultValue?.toString() ?? ""
    );

    const currentValue = value !== undefined
        ? value.toString()
        : internalValue;

    const isFloating = isFocused || currentValue.length > 0;

    return (
        <div className="flex flex-col gap-1 w-full">
            <div className="relative">
                <input
                    type="date"
                    value={value}
                    defaultValue={defaultValue}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => {
                        if (value === undefined) {
                            setInternalValue(
                                e.target.value
                            );
                        }

                        onChange?.(e);
                    }}
                    className={`
                        w-full
                        h-16
                        rounded-xl
                        border
                        ${error ? "border-danger" : "border-border"}
                        bg-background
                        px-4
                        ${isFloating ? "pt-6 pb-2" : "py-0"}
                        text-base
                        outline-none
                        transition-all
                        duration-200
                        focus:border-primary
                        ${className}
                    `}
                    {...props}
                />

                <label className={`
                    absolute
                    left-4
                    pointer-events-none
                    transition-all
                    duration-200

                    ${isFloating
                        ? `
                            top-2
                            text-xs
                            text-primary
                        `
                        : `
                            top-1/2
                            -translate-y-1/2
                            text-base
                            text-foreground-muted
                        `
                    }
                `}>
                    {label}
                </label>
            </div>

            {error && (
                <span className="
                    text-sm
                    text-danger
                ">
                    {error}
                </span>
            )}
        </div>
    );
}