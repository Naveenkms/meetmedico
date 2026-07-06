import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function GrowYourHealthPresenceCard({
  icon: Icon,
  title,
  description,
  actionButton,
}: {
  icon: React.ElementType
  title: string
  description?: string
  actionButton: React.ReactNode
}) {
  return (
    <Card className="h-full border-primary/50 bg-white/80 hover:border-secondary/50">
      <CardHeader className="flex flex-1 flex-col items-start gap-8 p-6">
        <Icon className="group-hover/card:stroke-secondary" />
        <div className="space-y-2">
          <CardTitle className="text-base leading-5 font-bold md:text-xl md:leading-[1.3]">
            {title}
          </CardTitle>
          <CardDescription className="md:text-base md:leading-6">
            {description}
          </CardDescription>
        </div>
        <div className="flex flex-1 items-end">{actionButton}</div>
      </CardHeader>
    </Card>
  )
}
