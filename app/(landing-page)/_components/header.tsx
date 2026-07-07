import Link from "next/link"

import NavContainer from "./nav-container"
import Profile from "./profile"
import LogoMinimised from "@/components/logo-minimised"
import { Button } from "@/components/ui/button"
import Hamburger from "@/components/icons/hamburger"
import NavLink from "./nav-link"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import NavLinksDropdownTrigger from "./nav-links-dropdown-trigger"
import NavLogo from "./nav-logo"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-15 items-center border-b border-neutral-50 bg-primary/5 px-4 py-2 backdrop-blur-[44px] md:bg-white-900/80 md:py-3">
      <NavContainer>
        <div className="hidden items-center md:flex md:basis-[66.66%] md:*:basis-1/2">
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-5 md:pr-3.75">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <NavLinksDropdownTrigger>
                      Professionals
                    </NavLinksDropdownTrigger>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40" align="start">
                    <DropdownMenuItem>Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Item 2</DropdownMenuItem>
                    <DropdownMenuItem>Item 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <NavLinksDropdownTrigger>
                      Health Services
                    </NavLinksDropdownTrigger>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40" align="start">
                    <DropdownMenuItem>Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Item 2</DropdownMenuItem>
                    <DropdownMenuItem>Item 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>{" "}
              </li>
              <li>
                <NavLink href="/events">Events</NavLink>
              </li>
            </ul>
          </nav>
          <NavLogo />
        </div>
        <Button
          variant="outline"
          className="rounded-lg bg-inherit p-3 md:hidden"
        >
          <Hamburger />
        </Button>
        <Link href="/">
          <LogoMinimised className="md:hidden" />
        </Link>
        <Profile />
      </NavContainer>
    </header>
  )
}
