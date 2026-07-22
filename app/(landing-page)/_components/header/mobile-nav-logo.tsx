import LogoMinimised from "@/components/logo-minimised"

import Link from "next/link"

export default function MobileNavLogo() {
  return (
    <Link href="/">
      <LogoMinimised className="md:hidden" />
    </Link>
  )
}
