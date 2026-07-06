"use client"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import searchDocotorsFormSchema from "../schema/search-doctors-form-schema"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { FloatingLabelInput } from "@/components/ui/floating-label-input"
import { Button } from "@/components/ui/button"
import LocationIcon from "@/components/icons/location"

export default function SearchDoctorsForm() {
  const form = useForm<z.infer<typeof searchDocotorsFormSchema>>({
    resolver: zodResolver(searchDocotorsFormSchema),
    defaultValues: {
      country: "",
      speciality: "",
    },
    reValidateMode: "onChange",
  })

  const onSubmit = (data: z.infer<typeof searchDocotorsFormSchema>) => {
    alert("You submitted the following values:" + JSON.stringify(data, null, 2))
  }
  return (
    <form
      id="search-doctors"
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-6 md:flex-row md:gap-4"
    >
      <Controller
        name="country"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <div className="relative">
              <LocationIcon className="absolute left-3 top-3.25" />
              <FloatingLabelInput
                label="Country / City"
                {...field}
                id="country"
                aria-invalid={fieldState.invalid}
                placeholder="Country / City"
                autoComplete="off"
                className="pl-9"
              />
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="speciality"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FloatingLabelInput
              label="Specialty  / Diseases"
              {...field}
              id="country"
              aria-invalid={fieldState.invalid}
              placeholder="eg. Cardiology, Diabetes "
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Field>
        <Button form="search-doctors" className="h-10.5 text-sm md:text-base">
          Search Doctors
        </Button>
      </Field>
    </form>
  )
}
