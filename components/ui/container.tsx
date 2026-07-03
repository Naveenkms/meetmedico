import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

function Container({
  asChild,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="container"
      className={cn(
        "flex w-full max-w-300 items-center justify-between",
        className
      )}
      {...props}
    />
  )
}

export { Container }
