"use client"

import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "peer-disabled::opacity-50 px-1 text-[0.625rem] leading-[0.8125] font-medium tracking-[0%] text-neutral-600 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed md:text-xs md:leading-[1.33333]",
        className
      )}
      {...props}
    />
  )
}

export { Label }
