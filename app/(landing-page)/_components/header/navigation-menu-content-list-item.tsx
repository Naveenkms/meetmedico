import Link from "next/link"

import { NavigationMenuLink } from "@/components/ui/navigation-menu"

export default function NavigationMenuContentListItem({
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
              <div className="text-base leading-none font-medium group-hover:text-primary">
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
