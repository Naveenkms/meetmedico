"use client"
import Link from "next/link"

import NavContainer from "./nav-container"
import Profile from "./profile"
import LogoMinimised from "@/components/logo-minimised"
import { Button } from "@/components/ui/button"
import Hamburger from "@/components/icons/hamburger"
import NavLogo from "./nav-logo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import { ScrollHideHeader } from "@/components/ui/scroll-hide-header"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Header() {
  const pathName = usePathname()
  const isActive = (targetPath: string) =>
    targetPath === "/" ? pathName === "/" : pathName.startsWith(targetPath)

  return (
    <ScrollHideHeader>
      <NavContainer>
        <div className="hidden items-center md:flex md:basis-[66.66%] md:*:basis-1/2">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  active={isActive("/")}
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Professionals</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-96">
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built with Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:flex">
                <NavigationMenuTrigger>Health Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  active={isActive("/events")}
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/events">Events</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
    </ScrollHideHeader>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
