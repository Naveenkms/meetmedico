import User from "@/components/icons/user"
import { Button } from "@/components/ui/button"

export default function Profile() {
  return (
    <>
      <div className="hidden items-center gap-4 md:flex">
        <Button variant="outline" size="sm">
          Register
        </Button>
        <Button size="sm">Login</Button>
      </div>
      <Button className="size-10 p-2.5 md:hidden">
        <User />
      </Button>
    </>
  )
}
