import { Container } from "@/components/ui/container"

export default function SectionContainer({
  className,
  ...props
}: React.ComponentProps<typeof Container>) {
  return (
    <Container
      className="flex flex-col justify-center gap-6 py-10 max-[75rem]:px-4 md:gap-8 md:py-20 xl:px-0"
      {...props}
    />
  )
}
