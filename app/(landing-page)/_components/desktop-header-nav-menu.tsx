"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import NAVIGATION_MENU_CONTENT from "@/app/contents/navigation-menu-content"
import PAGE_LINKS from "@/app/contents/page-links"

export default function DesktopHeaderNavMenu({
  className,
}: {
  className?: string
}) {
  const pathName = usePathname()
  const isActive = (targetPath: string) =>
    targetPath === "/" ? pathName === "/" : pathName.startsWith(targetPath)

  return (
    <NavigationMenu className={cn("hidden lg:flex", className)}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            active={isActive("/")}
            className={navigationMenuTriggerStyle()}
          >
            <Link href={PAGE_LINKS.home}>Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Professionals</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-120">
              {NAVIGATION_MENU_CONTENT.professionals.map(
                ({ title, description, href, icon }) => (
                  <ListItem
                    key={title}
                    href={href}
                    title={title}
                    description={description}
                    icon={icon}
                  />
                )
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Health Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-150">
              {NAVIGATION_MENU_CONTENT.healthServices.map(
                ({ title, description, href, icon }) => (
                  <ListItem
                    key={title}
                    title={title}
                    href={href}
                    description={description}
                    icon={icon}
                  />
                )
              )}
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
  )
}

function ListItem({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string
  description: string
  href: string
  icon: React.ElementType
}) {
  return (
    <li>
      <NavigationMenuLink asChild className="group">
        <Link href={href}>
          <div className="flex items-center gap-2 p-2.5">
            <Icon className="size-6 text-neutral-500 group-hover:text-primary" />
            <div className="flex flex-col gap-1">
              <div className="leading-none font-medium text-base group-hover:text-primary">
                {title}
              </div>
              <div className="line-clamp-2 text-neutral-500">{description}</div>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
