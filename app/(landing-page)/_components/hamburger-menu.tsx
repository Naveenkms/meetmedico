import { cn } from "@/lib/utils"
import Hamburger from "@/components/icons/hamburger"
import { Button } from "@/components/ui/button"

export default function HamburgerMenu({ className }: { className?: string }) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("rounded-lg bg-inherit p-2.75 lg:hidden", className)}
    >
      <Hamburger />
    </Button>
  )
}
