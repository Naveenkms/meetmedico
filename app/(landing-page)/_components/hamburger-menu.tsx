"use client"
import Link from "next/link"
import { useState } from "react"

import { cn } from "@/lib/utils"
import Hamburger from "@/components/icons/hamburger"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import NAVIGATION_MENU_CONTENT from "@/app/contents/navigation-menu-content"
import PAGE_LINKS from "@/app/contents/page-links"
import useCheckPageActive from "@/hooks/use-check-page-active"

export default function HamburgerMenu({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  const sheetClose = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn("rounded-lg bg-inherit p-2.75 lg:hidden", className)}
        >
          <Hamburger />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-12 overflow-auto bg-primary/5 p-4">
          <MenuItem>
            <MenuLinksTitle>All Professionals</MenuLinksTitle>
            <MenuLinksList>
              {NAVIGATION_MENU_CONTENT.professionals.map(({ title, href }) => (
                <MenuLink key={title} href={href} onClick={sheetClose}>
                  {title}
                </MenuLink>
              ))}
            </MenuLinksList>
          </MenuItem>
          <MenuItem>
            <MenuLinksTitle>Health Services</MenuLinksTitle>
            <MenuLinksList>
              {NAVIGATION_MENU_CONTENT.healthServices.map(({ title, href }) => (
                <MenuLink key={title} href={href} onClick={sheetClose}>
                  {title}
                </MenuLink>
              ))}
            </MenuLinksList>
          </MenuItem>
          <MenuItem>
            <MenuLinksTitle>Other</MenuLinksTitle>
            <MenuLinksList>
              <MenuLink href={PAGE_LINKS.events}>Events</MenuLink>
            </MenuLinksList>
          </MenuItem>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function MenuItem({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>
}

function MenuLinksTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-medium text-neutral-600">{children}</div>
}

function MenuLinksList({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-3">{children}</ul>
}

function MenuLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick?: React.MouseEventHandler<HTMLLIElement>
  children: React.ReactNode
}) {
  const { checkIsPageActive } = useCheckPageActive()

  const isActive = checkIsPageActive(href)

  return (
    <li
      onClick={onClick}
      className={cn(
        "text-2xl font-medium",
        isActive && "font-semibold text-primary"
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  )
}
