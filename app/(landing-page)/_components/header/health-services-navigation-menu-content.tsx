import { NavigationMenuContent } from "@/components/ui/navigation-menu"
import NAVIGATION_MENU_CONTENT from "@/contents/navigation-menu-content"
import NavigationMenuContentListItem from "./navigation-menu-content-list-item"

export default function HealthServicesNavigationMenuContent() {
  return (
    <NavigationMenuContent>
      <ul className="w-150">
        {NAVIGATION_MENU_CONTENT.healthServices.map(
          ({ title, description, href, icon }) => (
            <NavigationMenuContentListItem
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
  )
}
