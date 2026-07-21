"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import z from "zod"

import { FloatingLabelInput } from "@/components/ui/floating-label-input"
import { Button } from "@/components/ui/button"
import searchEventsFormSchema from "../schema/search-events-form-schema"
import { Field, FieldError } from "@/components/ui/field"
import CountryInput from "@/components/country-input"

export default function SearchEventsForm({
  eventType,
}: {
  eventType: z.infer<typeof searchEventsFormSchema>["eventType"]
}) {
  const form = useForm<z.infer<typeof searchEventsFormSchema>>({
    resolver: zodResolver(searchEventsFormSchema),
    defaultValues: {
      eventType,
      country: "",
      type: "",
    },
    reValidateMode: "onChange",
  })
  const onSubmit = (data: z.infer<typeof searchEventsFormSchema>) => {
    alert("You submitted the following values:" + JSON.stringify(data, null, 2))
  }

  return (
    <form
      id="search-events"
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-6 md:flex-row md:gap-4"
    >
      <Controller
        name="country"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <CountryInput
              label="Country / City"
              placeholder="Country / City"
              aria-invalid={fieldState.invalid}
              {...field}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="type"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FloatingLabelInput
              id="event-type"
              autoComplete="off"
              label="Event Type"
              placeholder="eg. Seminar, Webinar"
              aria-invalid={fieldState.invalid}
              {...field}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Field>
        <Button className="h-10.5 text-sm md:text-base" form="search-events">
          Search Events
        </Button>
      </Field>
    </form>
  )
}
