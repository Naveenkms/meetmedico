import { cn } from "@/lib/utils"
import { Input } from "./input"
import { Label } from "./label"

function FloatingLabelInput({
  id,
  ref,
  label,
  labelClassName,
  ...props
}: React.ComponentProps<typeof Input> & {
  label: string
  labelClassName?: string
}) {
  return (
    <div className="relative flex-1">
      <Input id={id} ref={ref} {...props} />
      <Label
        htmlFor={id}
        className={cn("absolute left-2 -translate-y-1.25 bg-white md:-translate-y-2", labelClassName)}
      >
        {label}
      </Label>
    </div>
  )
}

export { FloatingLabelInput }
