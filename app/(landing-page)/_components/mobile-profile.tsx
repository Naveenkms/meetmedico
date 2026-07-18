import User from "@/components/icons/user"
import { Button } from "@/components/ui/button"

export default function MobileProfile() {
  return (
    <Button className="size-10 p-2.5 md:hidden">
      <User />
    </Button>
  )
}
