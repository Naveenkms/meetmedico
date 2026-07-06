import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button aria-invalid:border-destructive aria-invalid:ring-destructive/20 inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 bg-clip-padding text-base font-bold whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-3 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "rounded-lg bg-primary text-white-900 hover:bg-primary/80",
        outline:
          "rounded-xl border border-border bg-background text-primary hover:border-primary hover:bg-background/80 hover:text-neutral-600",
        secondary: "",
        "download-app": "rounded-md bg-neutral-900 text-white-900 font-medium text-lg",
      },
      size: {
        default: "h-10 md:h-11 px-6 py-3",
        sm: "h-[2.125rem] px-3 py-2 md:text-sm text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
