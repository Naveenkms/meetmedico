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
    <Card className="w-71.25 flex-1">
      <CardHeader className="flex flex-col gap-5 flex-1">
        <div className="relative h-47.5 w-full rounded-lg">
          <Image fill src={imgSrc} alt={name} />
        </div>
        <div className="space-y-4 flex-1 flex flex-col">
          <div className="space-y-1 flex-1 flex flex-col">  
            <h3 className="line-clamp-2 text-base/6 font-semibold text-foreground flex-1">
              {name}
            </h3>
            <p className="text-xs/4.5 text-neutral-500 md:text-sm/4.5 line-clamp-1">
              {designation}
            </p>
          </div>
          <div className="text-xs/4 text-card-foreground md:text-sm/4.5 line-clamp-1">
            {location}
          </div>
        </div>
      </CardHeader>
      <CardFooter>{actionButton}</CardFooter>
    </Card>
  )
}
