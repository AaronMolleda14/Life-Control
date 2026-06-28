"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";

interface MainLayoutProps {
    headerTitle: string;
    children: React.ReactNode;
}

export default function MainLayout({
    headerTitle,
    children,
}: MainLayoutProps) {

    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="
                flex
                flex-1
                flex-col
            ">
                <Header title={headerTitle}/>

                <main className="
                    flex-1
                    p-4
                ">
                    {children}
                </main>
            </div>
        </div>
    );
}