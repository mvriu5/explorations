import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explorations",
  description: "React component explorations",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className={"bg-zinc-800"}>
                    {children}
                </div>
            </body>
        </html>
    );
}
