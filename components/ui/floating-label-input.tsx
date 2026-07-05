import { Input } from "./input"
import { Label } from "./label"

function FloatingLabelInput({
  id,
  ref,
  label,
  className,
  ...props
}: React.ComponentProps<typeof Input> & {
  label: string
}) {
  return (
    <div className="relative flex-1">
      <Input id={id} ref={ref} {...props} />
      <Label
        htmlFor={id}
        className="absolute left-2 -translate-y-1.25 md:-translate-y-2"
      >
        {label}
      </Label>
    </div>
  )
}

export { FloatingLabelInput }
