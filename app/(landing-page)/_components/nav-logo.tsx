import Logo from "@/components/logo"
import LogoMinimised from "@/components/logo-minimised"

export default function NavLogo() {
  return (
    <>
      <Logo className="hidden xl:block" />
      <LogoMinimised className="xl:hidden" />
    </>
  )
}
