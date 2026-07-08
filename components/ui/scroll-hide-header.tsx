"use client"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import * as React from "react"

import { cn } from "@/lib/utils"

function ScrollHideHeader({
  className,
  ...props
}: React.ComponentProps<typeof motion.header>) {
  const { scrollY } = useScroll()
  const [scrollDirection, setScrollDirection] = React.useState<"up" | "down">(
    "up"
  )

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - (scrollY.getPrevious() || 0)
    setScrollDirection(diff > 0 ? "down" : "up")
  })

  return (
    <motion.header
      className={cn(
        "sticky top-0 left-0 z-50 flex h-15 w-full items-center border-b border-neutral-50 bg-primary/5 px-4 py-2 backdrop-blur-[44px] md:bg-white-900/80 md:py-3",
        className
      )}
      animate={{
        y: scrollDirection === "up" ? 0 : "-100%",
        opacity: scrollDirection === "up" ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      {...props}
    />
  )
}

export { ScrollHideHeader }
