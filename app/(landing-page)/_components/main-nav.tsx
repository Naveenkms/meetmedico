import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NavLink from "./nav-link"
import NavLinksDropdownTrigger from "./nav-links-dropdown-trigger"
import { Button } from "@/components/ui/button"
import Hamburger from "@/components/icons/hamburger"

export default function MainNav() {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-5 md:pr-3.75">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <NavLinksDropdownTrigger>Professionals</NavLinksDropdownTrigger>
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
      <Button variant="outline" className="rounded-lg bg-inherit p-3 md:hidden">
        <Hamburger />
      </Button>
    </>
  )
}
