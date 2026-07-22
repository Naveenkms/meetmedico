import User from "@/components/icons/user"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function MobileProfile() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="size-10 p-2.5 md:hidden">
          <User />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Register or Login</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="outline">Register</Button>
          <DrawerClose asChild>
            <Button>Login</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
