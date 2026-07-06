import { Be_Vietnam_Pro, League_Spartan } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-be-vietnam-pro",
})

const leagueSpartan = League_Spartan({
  weight: ["400", "500"],
  variable: "--font-league-spartan",
})

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
      <body className="bg-background text-foreground border-box">{children}</body>
    </html>
  )
}
