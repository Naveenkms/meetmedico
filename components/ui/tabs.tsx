"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tabs as TabsPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex w-full has-group-data-[variant=line]/tabs-list:shadow-md data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list peer inline-flex max-md:[&::-webkit-scrollbar]:hidden max-md:[scrollbar-width:none] items-center overflow-x-auto border text-xs group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col md:text-sm",
  {
    variants: {
      variant: {
        default:
          "w-full overflow-x-auto rounded-lg border-border py-1 pl-1 text-muted group-data-horizontal/tabs:h-9 md:w-fit md:p-1",
        line: "border-neutral/5 h-10 w-full rounded-t-lg bg-background text-neutral-600 md:h-10.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-active:bg-primary/10 data-active:font-bold data-active:text-primary",
        "relative inline-flex h-full flex-1 items-center justify-center px-2 py-1.5 whitespace-nowrap transition-all group-data-[variant=default]/tabs-list:rounded-sm group-data-[variant=line]/tabs-list:border-primary/50 group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:bg-neutral-50 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 md:py-1.25 group-data-[variant=line]/tabs-list:data-active:border-b-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "peer-data-[variant=line]:border-neutral-5 flex-1 outline-none peer-data-[variant=default]:pt-8 peer-data-[variant=line]:rounded-b-lg peer-data-[variant=line]:border-x peer-data-[variant=line]:border-b peer-data-[variant=line]:bg-background peer-data-[variant=line]:p-4 md:peer-data-[variant=default]:pt-6 md:peer-data-[variant=line]:p-6",
        className
      )}
      {...props}
    />
  )
}
export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
