"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({
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
                <Header />

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