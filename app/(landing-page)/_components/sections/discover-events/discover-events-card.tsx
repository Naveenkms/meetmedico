import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"

export default function DiscoverEventsCard({
  name,
  imgSrc,
  date,
  location,
  tags,
  actionButton,
}: {
  name: string
  imgSrc: string
  date: string
  location: string
  tags: string[]
  actionButton: React.ReactNode
}) {
  return (
    <Card className="w-71.25">
      <CardHeader className="flex flex-col gap-5">
        <div className="relative h-47.5 w-full rounded-lg">
          <Image fill src={imgSrc} alt={name} />
        </div>
        <div className="space-y-4">
          <div className="flex gap-1">
            {tags.map((tag, i) => (
              <Badge key={i} variant="dark">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="space-y-1">
            <h3 className="text-base leading-normal font-semibold text-foreground md:text-base/6">
              {name}
            </h3>
            <p className="text-xs/4.5 text-neutral-500 md:text-sm/4.5">
              {date}
            </p>
          </div>
          <div className="space-y-[1.15625rem] md:space-y-4">
            <div className="text-xs/4 text-card-foreground md:text-sm/4.5">
              {location}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardFooter>{actionButton}</CardFooter>
    </Card>
  )
}
