import { Container } from "@/components/ui/container"

export default function NavContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return <Container className="gap-x-7">{children}</Container>
}
