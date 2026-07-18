"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex w-full has-group-data-[variant=line]/tabs-list:rounded-lg has-group-data-[variant=line]/tabs-list:shadow-md data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list peer relative z-0 inline-flex items-center overflow-x-auto border text-xs group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col max-md:[scrollbar-width:none] md:text-sm max-md:[&::-webkit-scrollbar]:hidden",
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
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "group/tabs-trigger data-active:font-bold data-active:text-primary",
        "inline-flex h-full flex-1 items-center justify-center px-2 py-1.5 whitespace-nowrap transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 md:py-1.25 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function TabsIndicator({ className, ...props }: TabsPrimitive.Indicator.Props) {
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      style={{
        width: "var(--active-tab-width)",
        height: "var(--active-tab-height)",
        transform: "translateX(var(--active-tab-left))",
      }}
      className={cn(
        "absolute top-0 left-0 box-border h-full bg-primary/10 transition-[transform,width] duration-150 ease-in-out group-data-[variant=default]/tabs-list:top-1/2 group-data-[variant=default]/tabs-list:-translate-y-1/2 group-data-[variant=default]/tabs-list:rounded-sm group-data-[variant=line]/tabs-list:border-b-2 group-data-[variant=line]/tabs-list:border-primary/50",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "peer-data-[variant=line]:border-neutral-5 flex-1 outline-none peer-data-[variant=default]:pt-8 peer-data-[variant=line]:rounded-b-lg peer-data-[variant=line]:border-x peer-data-[variant=line]:border-b peer-data-[variant=line]:bg-background peer-data-[variant=line]:p-3.75 md:peer-data-[variant=default]:pt-6 md:peer-data-[variant=line]:p-6",
        className
      )}
      {...props}
    />
  )
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsIndicator,
  TabsContent,
  tabsListVariants,
}
