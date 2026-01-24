"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { useAppContext } from '../../lib/context';
import NavBar from './NavBar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { TITLE, isSidebarOpen, setIsSidebarOpen, isDark, toggleTheme } = useAppContext();
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <main className="flex h-screen flex-col">
            <NavBar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                isDark={isDark}
                toggleTheme={toggleTheme}
            />
            <div className="flex-1 min-h-0 flex flex-col">
                {children}
            </div>
        </main>
    );
}
