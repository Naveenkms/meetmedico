import { cn } from "@/lib/utils"

function TypographyH1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-center text-[1.875rem] leading-[1.33333] font-bold tracking-[0%] text-balance md:text-[2.5rem]",
        className
      )}
      {...props}
    />
  )
}

function TypographyH2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-center text-xl leading-[1.3] font-bold md:text-[1.75rem] md:leading-[1.28571] md:font-semibold",
        className
      )}
      {...props}
    />
  )
}

export { TypographyH1, TypographyH2 }
