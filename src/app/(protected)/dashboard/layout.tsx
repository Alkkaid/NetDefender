import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Sidebar } from "@/app/(protected)/_components/sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard of NetDefender",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="h-full">
            <Sidebar/>
            <div className="pl-[206px] h-full">{children}</div>
        </main>
    );
}
