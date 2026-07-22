import { NavigationMenuContent } from "@/components/ui/navigation-menu"
import NAVIGATION_MENU_CONTENT from "@/contents/navigation-menu-content"
import NavigationMenuContentListItem from "./navigation-menu-content-list-item"

export default function ProfessionalsNavigationMenuContent() {
  return (
    <NavigationMenuContent>
      <ul className="w-120">
        {NAVIGATION_MENU_CONTENT.professionals.map(
          ({ title, description, href, icon }) => (
            <NavigationMenuContentListItem
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
  )
}
