import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export default function FindHealthServicesCard({
  name,
  imgSrc,
  designation,
  location,
  actionButton,
}: {
  name: string
  imgSrc: string
  designation: string
  location: string
  actionButton: React.ReactNode
}) {
  return (
    <Card className="w-71.25">
      <CardHeader className="flex flex-col gap-5">
        <div className="relative h-47.5 w-full rounded-lg">
          <Image fill src={imgSrc} alt={name} />
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-base leading-normal font-semibold text-foreground md:leading-tight">
              {name}
            </h3>
            <p className="text-xs leading-[1.33333] text-neutral-500 md:text-sm md:leading-[1.14285]">
              {designation}
            </p>
          </div>
          <div className="md:text:sm text-xs leading-[1.33333] text-card-foreground md:leading-[1.2857]">
            {location}
          </div>
        </div>
      </CardHeader>
      <CardFooter>{actionButton}</CardFooter>
    </Card>
  )
}
