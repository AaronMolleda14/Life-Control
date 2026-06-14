"use client";

import {
    InputHTMLAttributes,
    ReactNode,
    useState,
} from "react";

interface TextFieldProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    rightElement?: ReactNode;
    onRightElementClick?: () => void;
}

export default function TextField({
    label,
    error,
    rightElement,
    onRightElementClick,
    className = "",
    onChange,
    value,
    defaultValue,
    ...props
}: TextFieldProps) {
    const [isFocused, setIsFocused] = useState(false);

    const [internalValue, setInternalValue] = useState(
        defaultValue?.toString() ?? ""
    );

    const currentValue =
        value !== undefined
            ? value.toString()
            : internalValue;

    const isFloating =
        isFocused || currentValue.length > 0;

    return (
        <div className="flex flex-col gap-1 w-full">
            <div className="relative">
                <input
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
                        h-14
                        rounded-xl
                        border
                        ${error ? "border-danger" : "border-border"}
                        bg-background
                        px-4
                        ${rightElement ? "pr-12" : ""}
                        ${isFloating ? "pt-6 pb-2" : "py-0"}
                        ${props.type === "password"
                            ? "text-2xl tracking-wider"
                            : "text-base"
                        }
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

                {rightElement && (
                    <button 
                        className="
                            absolute
                            right-3
                            top-1/2
                            -translate-y-1/2
                            text-foreground-muted
                            hover:text-primary
                            transition-colors
                            cursor-pointer
                        "
                        onClick={onRightElementClick}
                    >
                        {rightElement}
                    </button>
                )}
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