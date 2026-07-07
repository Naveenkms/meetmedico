"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export default function NavLink({
  href,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  const pathName = usePathname()
  const targetPath = typeof href === "string" ? href : href.pathname || ""

  const isActive =
    targetPath === "/" ? pathName === "/" : pathName.startsWith(targetPath)

  return (
    <Link
      href={href}
      className={cn(
        "text-sm text-neutral-600 transition-all hover:text-primary",
        isActive && "font-bold text-primary",
        className
      )}
      {...props}
    />
  )
}
