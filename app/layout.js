import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Url shortner - A tool",
    description: "This is a tool for url shortner.This tool converts long links to shortUrl",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-linear-to-br from-purple-100 to-purple-200`} >
                <div className="relative h-screen">
                    <div className="absolute inset-0">
                        <Navbar />
                        {children}
                    </div>
                </div>

            </body>
        </html>
    );
}
