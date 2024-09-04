import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, {ReactNode} from "react";
import {ThemeProvider} from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explorations",
  description: "React component explorations",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
            <ThemeProvider
                attribute="class"
                defaultTheme={"dark"}
                enableSystem
                disableTransitionOnChange
            >
                <div className={"min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-800 dark:text-white"}>
                    {children}
                </div>
            </ThemeProvider>
            </body>
        </html>
    );
}
