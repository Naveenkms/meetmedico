import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

export default function SectionContainer({
  className,
  ...props
}: React.ComponentProps<typeof Container>) {
  return (
    <Container
      className={cn(
        "flex flex-col justify-center gap-6 pt-8 pb-10 max-[75rem]:px-4 md:gap-8 md:py-20 xl:px-0",
        className
      )}
      {...props}
    />
  )
}
