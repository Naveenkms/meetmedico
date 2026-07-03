import { Be_Vietnam_Pro } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-be-vietnam-pro",
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
      className={cn("antialiased", beVietnamPro.variable, "font-sans")}
    >
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}
