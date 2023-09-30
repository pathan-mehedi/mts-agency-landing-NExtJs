import Navbar from "@/components/Navbar";
import "./globals.css";
import { Metadata } from "next";

export async function generateMetadata() {
    return {
        title: "Home | Your Trusted Partner",
    };
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
