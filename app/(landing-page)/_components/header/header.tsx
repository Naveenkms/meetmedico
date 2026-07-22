import DesktopProfile from "../desktop-profile"
import { ScrollHideHeader } from "@/components/ui/scroll-hide-header"
import { Container } from "@/components/ui/container"
import DesktopHeaderNavMenu from "./desktop-header-nav-menu"
import DesktopNavLogo from "../desktop-nav-logo"
import MobileNavLogo from "./mobile-nav-logo"
import MobileProfile from "../mobile-profile"
import LazyHamburgerMenu from "./lazy-hamburger-menu"

export default function Header() {
  return (
    <ScrollHideHeader>
      <Container className="hidden md:flex">
        <DesktopHeaderNavMenu className="basis-1/3 md:hidden lg:flex" />
        <div className="flex basis-1/3 items-center lg:hidden">
          <LazyHamburgerMenu className="md:flex" />
        </div>
        <DesktopNavLogo className="basis-1/3" />
        <DesktopProfile className="basis-1/3" />
      </Container>
      <Container className="md:hidden">
        <LazyHamburgerMenu />
        <MobileNavLogo />
        <MobileProfile />
      </Container>
    </ScrollHideHeader>
  )
}
