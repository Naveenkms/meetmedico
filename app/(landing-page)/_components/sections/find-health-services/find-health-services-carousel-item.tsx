import { CarouselItem } from "@/components/ui/carousel"

export default function FindHealthServicesCarouselItem({
  children,
}: {
  children: React.ReactNode
}) {
  return <CarouselItem className="flex flex-col">{children}</CarouselItem>
}
