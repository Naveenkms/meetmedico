import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function DesktopProfile({ className }: { className?: string }) {
  return (
    <div
      className={cn("hidden items-center justify-end gap-4 md:flex", className)}
    >
      <Button variant="outline" size="sm">
        Register
      </Button>
      <Button size="sm">Login</Button>
    </div>
  )
}
