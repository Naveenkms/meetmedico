import { FloatingLabelInput } from "@/components/ui/floating-label-input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function SearchProfessionalsForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form className="flex flex-col gap-6 md:flex-row md:gap-4" {...props} />
  )
}

function SearchProfessionalsFormSpecialityInput({
  ...props
}: React.ComponentProps<typeof FloatingLabelInput>) {
  return <FloatingLabelInput id="speciality" autoComplete="off" {...props} />
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
  SearchProfessionalsFormSpecialityInput,
  SearchProfessionalsFormSubmitButton,
}
