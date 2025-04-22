import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Vasukhi",
    default: "Vasukhi - Premium Eco-Friendly Water Bottle",
  },
  description: "Premium eco-friendly water bottle designed for your active lifestyle.",
  keywords: ["water bottle", "eco-friendly", "sustainable", "hydration", "reusable"],
  authors: [{ name: "Vasukhi" }],
  creator: "Vasukhi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vasukhi.com",
    title: "Vasukhi - Premium Eco-Friendly Water Bottle",
    description: "Premium eco-friendly water bottle designed for your active lifestyle.",
    siteName: "Vasukhi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasukhi - Premium Eco-Friendly Water Bottle",
    description: "Premium eco-friendly water bottle designed for your active lifestyle.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
