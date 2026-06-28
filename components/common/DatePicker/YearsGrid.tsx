"use client";

interface YearGridProps {
    selectedYear: number;
    onSelect: (year: number) => void;
}

export default function YearsGrid({
    selectedYear,
    onSelect,
}: YearGridProps) {

    const currentYear = new Date().getFullYear();

    const years = Array.from(
        { length: currentYear - 1900 + 1 },
        (_, index) => currentYear - index
    );

    return (
        <div className="
            max-h-64
            overflow-y-auto
            pr-4
        ">
            <div className="grid grid-cols-3 gap-2">
                {years.map(year => {

                    const isSelected = selectedYear === year;

                    return (
                        <button
                            key={year}
                            onClick={() => onSelect(year)}
                            className={`
                                rounded-xl
                                p-3
                                transition-all
                                cursor-pointer

                                ${isSelected
                                    ? "bg-primary text-white"
                                    : "hover:bg-primary/10"
                                }
                            `}
                        >
                            {year}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}