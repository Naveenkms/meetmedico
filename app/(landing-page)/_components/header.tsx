import MainNav from "./main-nav"
import NavContainer from "./nav-container"
import NavLogo from "./nav-logo"
import Profile from "./profile"

export default function Header() {
  return (
    <header className="sticky top-0 flex h-15 items-center border-b border-neutral-50 bg-inherit px-4 py-2 md:py-3">
      <NavContainer>
        <MainNav />
        <NavLogo />
        <Profile />
      </NavContainer>
    </header>
  )
}
