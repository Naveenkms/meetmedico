import Logo from "@/components/logo"
import LogoMinimised from "@/components/logo-minimised"
import Link from "next/link"

export default function NavLogo() {
  return (
    <div className="flex justify-center">
      <Link href="/">
        <Logo className="hidden xl:block" />
      </Link>
      <Link href="/">
        <LogoMinimised className="hidden md:block xl:hidden" />
      </Link>
    </div>
  )
}
