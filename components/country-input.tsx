import { cn } from "@/lib/utils"
import LocationIcon from "@/components/icons/location"
import { FloatingLabelInput } from "./ui/floating-label-input"

export default function CountryInput({
  className,
  ...props
}: React.ComponentProps<typeof FloatingLabelInput>) {
  return (
    <div className="relative">
      <LocationIcon className={cn("absolute top-3.25 left-3", className)} />
      <FloatingLabelInput
        id="country"
        placeholder="Country / City"
        autoComplete="off"
        className="pl-9"
        {...props}
      />
    </div>
  )
}
