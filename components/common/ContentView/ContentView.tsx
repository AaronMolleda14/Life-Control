"use client";

import Paper from "@/components/common/UI/Paper";
import Tabs from "@/components/common/ContentView/Tabs";

interface ContentViewProps {
    value: string;
    onChange: (value: string) => void;

    tabs: {
        value: string;
        label: string;
    }[];

    children: React.ReactNode;
}

export default function ContentView({
    value,
    onChange,
    tabs,
    children,
}: ContentViewProps) {

    return (
        <div>
            <Tabs
                value={value}
                items={tabs}
                onChange={onChange}
            />

            <Paper className="
                rounded-tl-none
                p-6
                h-[calc(100dvh-10rem)]
            ">
                {children}
            </Paper>

        </div>
    );
}