import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"

export default function FindProfessionalsCard({
  name,
  imgSrc,
  designation,
  location,
  tags,
  actionButton,
}: {
  name: string
  imgSrc: string
  designation: string
  location: string
  tags: string[]
  actionButton: React.ReactNode
}) {
  return (
    <Card className="w-71.25">
      <CardHeader className="flex flex-col gap-5">
        <div className="relative h-47.5 w-full rounded-lg">
          <Image
            fill
            src={imgSrc}
            alt={name}
            sizes="(max-width: 360px) 100vw, (max-width: 680px) 50vw,(max-width: 1080px) 33vw, 25vw"
          />
        </div>
        <div className="space-y-[1.15625rem] md:space-y-4">
          <div className="space-y-1">
            <h3 className="line-clamp-1 text-base leading-normal font-semibold text-foreground md:leading-tight">
              {name}
            </h3>
            <p className="line-clamp-1 text-xs/4.5 text-neutral-500 md:text-sm/4.5">
              {designation}
            </p>
          </div>
          <div className="space-y-[1.15625rem] md:space-y-4">
            <div className="line-clamp-1 text-xs/4 text-card-foreground md:text-sm/4.5">
              {location}
            </div>
            <div className="flex gap-1">
              {tags.map((tag, i) => (
                <Badge key={i}>{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardFooter>{actionButton}</CardFooter>
    </Card>
  )
}
