import MainNav from "./main-nav"
import NavContainer from "./nav-container"
import NavLogo from "./nav-logo"
import Profile from "./profile"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-15 items-center border-b border-neutral-50 bg-primary/5 px-4 py-2 backdrop-blur-[44px] md:bg-white-900/80 md:py-3">
      <NavContainer>
        <MainNav />
        <NavLogo />
        <Profile />
      </NavContainer>
    </header>
  )
}
