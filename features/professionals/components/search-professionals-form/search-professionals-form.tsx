import { FloatingLabelInput } from "@/components/ui/floating-label-input"
import { Button } from "@/components/ui/button"
import LocationIcon from "@/components/icons/location"
import { cn } from "@/lib/utils"

function SearchProfessionalsForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form className="flex flex-col gap-6 md:flex-row md:gap-4" {...props} />
  )
}

function SearchProfessionalsFormCountryInput({
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

function SearchProfessionalsFormSpecialityInput({
  ...props
}: React.ComponentProps<typeof FloatingLabelInput>) {
  return (
    <FloatingLabelInput
      id="country"
      autoComplete="off"
      {...props}
    />
  )
}

function SearchProfessionalsFormSubmitButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn("h-10.5 text-sm md:text-base", className)}
      {...props}
    />
  )
}

export {
  SearchProfessionalsForm,
  SearchProfessionalsFormCountryInput,
  SearchProfessionalsFormSpecialityInput,
  SearchProfessionalsFormSubmitButton,
}
