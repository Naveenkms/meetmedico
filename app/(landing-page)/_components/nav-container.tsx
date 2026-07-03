import { Container } from "@/components/ui/container"

export default function NavContainer({
  className,
  ...props
}: React.ComponentProps<typeof Container>) {
  return <Container className="gap-x-7" {...props} />
}
