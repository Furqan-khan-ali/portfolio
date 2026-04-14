import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Furqan Khan | Frontend Developer",
  description:
    "Frontend Developer building responsive web apps with React and Next.js. Expanding into Flutter mobile development and backend technologies like Node.js, Supabase, and SQL Server.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0f0f0f] text-[#f5f5f5]">{children}</body>
    </html>
  );
}
