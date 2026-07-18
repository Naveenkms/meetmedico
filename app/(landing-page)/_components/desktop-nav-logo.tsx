import Link from "next/link"

import { cn } from "@/lib/utils"
import Logo from "@/components/logo"
import LogoMinimised from "@/components/logo-minimised"

export default function DesktopNavLogo({ className }: { className?: string }) {
  return (
    <>
      <div className={cn("flex justify-center", className)}>
        <Link href="/">
          <Logo className="hidden xl:block" />
        </Link>
        <Link href="/">
          <LogoMinimised className="hidden md:block xl:hidden" />
        </Link>
      </div>
    </>
  )
}
