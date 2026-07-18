import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function FindDoctorsCard({
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
    <Card className="w-56">
      <CardHeader className="flex flex-col items-center">
        <Icon className="mb-5" />
        <CardTitle className="mb-1 text-sm/4.5 md:text-base md:leading-tight">
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>{actionButton}</CardFooter>
    </Card>
  )
}
