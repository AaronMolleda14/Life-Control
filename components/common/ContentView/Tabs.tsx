"use client";

interface TabItem {
    value: string;
    label: string;
}

interface TabsProps {
    value: string;
    items: TabItem[];
    onChange: (value: string) => void;
}

export default function Tabs({
    value,
    items,
    onChange,
}: TabsProps) {

    return (
        <div className="flex">
            {items.map(item => {
                const selected = item.value === value;

                return (
                    <button
                        key={item.value}
                        onClick={() =>
                            onChange(item.value)
                        }
                        className={`
                            px-6
                            py-3

                            border
                            border-border

                            rounded-t-xl

                            transition-colors

                            cursor-pointer

                            ${selected
                                ? `
                                    bg-surface/70
                                    text-primary
                                    border-primary
                                    
                                `
                                : `
                                    bg-surface/50

                                    hover:bg-primary/10
                                `
                            }
                        `}
                    >
                        {item.label}
                    </button>
                );
            })}
        </div>
    );
}