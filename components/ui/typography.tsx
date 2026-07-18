import { cn } from "@/lib/utils"

function TypographyH1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-center text-[1.875rem]/10 font-bold tracking-[0%] text-balance md:text-[2.5rem]/13",
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
        "text-center text-xl/6.5 font-bold md:text-[1.75rem]/9 md:font-semibold",
        className
      )}
      {...props}
    />
  )
}

export { TypographyH1, TypographyH2 }
