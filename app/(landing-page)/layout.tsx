import MainNav from "./_components/main-nav"
import NavContainer from "./_components/nav-container"
import NavLogo from "./_components/nav-logo"
import Profile from "./_components/profile"

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header className="flex h-15 items-center border-b border-neutral-50 px-4 py-2 md:py-3">
        <NavContainer>
          <MainNav />
          <NavLogo />
          <Profile />
        </NavContainer>
      </header>
      <main> {children}</main>
    </>
  )
}
