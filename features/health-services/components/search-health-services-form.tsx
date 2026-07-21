import { Button } from "@/components/ui/button"
import { FloatingLabelInput } from "@/components/ui/floating-label-input"
import { cn } from "@/lib/utils"

function SearchHealthServicesForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form className="flex flex-col gap-6 md:flex-row md:gap-4" {...props} />
  )
}

function SearchHealthServicesFormTypeInput({
  ...props
}: React.ComponentProps<typeof FloatingLabelInput>) {
  return <FloatingLabelInput id="country" autoComplete="off" {...props} />
}

function SearchServicesFormSubmitButton({
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
  SearchHealthServicesForm,
  SearchHealthServicesFormTypeInput,
  SearchServicesFormSubmitButton,
}
