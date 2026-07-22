"use client"
import Link from "next/link"
import dynamic from "next/dynamic"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import PAGE_LINKS from "@/contents/page-links"
import useCheckPageActive from "@/hooks/use-check-page-active"

const LazyProfessionalsNavigationMenuContent = dynamic(
  () => import("./professionals-navigation-menu-content"),
  {
    ssr: false,
  }
)

const LazyHealthServicesNavigationMenuContent = dynamic(
  () => import("./health-services-navigation-menu-content"),
  {
    ssr: false,
  }
)

export default function DesktopHeaderNavMenu({
  className,
}: {
  className?: string
}) {
  const { checkIsPageActive } = useCheckPageActive()

  return (
    <NavigationMenu className={cn("hidden lg:flex", className)}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            active={checkIsPageActive(PAGE_LINKS.home)}
            className={navigationMenuTriggerStyle()}
          >
            <Link href={PAGE_LINKS.home}>Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Professionals</NavigationMenuTrigger>
          <LazyProfessionalsNavigationMenuContent />
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Health Services</NavigationMenuTrigger>
          <LazyHealthServicesNavigationMenuContent />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            active={checkIsPageActive(PAGE_LINKS.events)}
            className={navigationMenuTriggerStyle()}
          >
            <Link href={PAGE_LINKS.events}>Events</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
