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
      <CardHeader className="flex flex-1 flex-col gap-5">
        <div className="relative h-47.5 w-full rounded-lg">
          <Image
            fill
            src={imgSrc}
            alt={name}
            sizes="(max-width: 360px) 100vw, (max-width: 680px) 50vw,(max-width: 1080px) 33vw, 25vw"
          />
        </div>
        <div className="flex flex-1 flex-col space-y-4">
          <div className="flex flex-1 flex-col space-y-1">
            <h3 className="line-clamp-2 flex-1 text-base/6 font-semibold text-foreground">
              {name}
            </h3>
            <p className="line-clamp-1 text-xs/4.5 text-neutral-500 md:text-sm/4.5">
              {designation}
            </p>
          </div>
          <div className="line-clamp-1 text-xs/4 text-card-foreground md:text-sm/4.5">
            {location}
          </div>
        </div>
      </CardHeader>
      <CardFooter>{actionButton}</CardFooter>
    </Card>
  )
}
