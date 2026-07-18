import { cn } from "@/lib/utils"
import Hamburger from "@/components/icons/hamburger"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function HamburgerMenu({ className }: { className?: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn("rounded-lg bg-inherit p-2.75 lg:hidden", className)}
        >
          <Hamburger />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="data-[side=left]:w-full">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>This action cannot be undone.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
