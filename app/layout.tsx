import { Be_Vietnam_Pro, League_Spartan } from "next/font/google"
import { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-be-vietnam-pro",
})

const leagueSpartan = League_Spartan({
  weight: ["400", "500"],
  variable: "--font-league-spartan",
})

export const metadata: Metadata = {
  title: "Meetmedico",
  description: "Discover Trusted Health Services Near You",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        beVietnamPro.variable,
        leagueSpartan.variable,
        "font-sans"
      )}
    >
      <body className="border-box bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
