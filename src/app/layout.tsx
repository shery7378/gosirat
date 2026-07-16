import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import { GlobalSchemas } from "@/components/Schemas";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

export const metadata: Metadata = {
    title: "Safe & Smart School Transportation Services | GoSirat",
    description: "GoSirat provides safe school transportation and pick-and-drop services with verified drivers, live GPS tracking, QR verification, and secure student travel.",
    icons: {
        icon: "/favicon.ico?v=1",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${manrope.variable} font-sans h-full antialiased`}
        >
            <head>
                <link rel="icon" href="/favicon.ico?v=1" />
                <link rel="shortcut icon" href="/favicon.ico?v=1" />
                <link rel="apple-touch-icon" href="/favicon.ico?v=1" />
            </head>
            <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>
                <GlobalSchemas />
                <AosInit />
                <Header />
                <main className="flex-1 flex flex-col">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
