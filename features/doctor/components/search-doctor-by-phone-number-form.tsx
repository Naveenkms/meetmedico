"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import z from "zod"

import { Button } from "@/components/ui/button"
import { FloatingLabelInput } from "@/components/ui/floating-label-input"
import { Field, FieldError } from "@/components/ui/field"

const phoneRegex = new RegExp(/^\+?[1-9]\d{9,14}$/)

const formSchema = z.object({
  phoneNo: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(phoneRegex, { message: "Invalid phone number format" }),
})

export default function SearchDoctorByPhoneNumberForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNo: "",
    },
    reValidateMode: "onChange",
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    alert("You submitted the following values:" + JSON.stringify(data, null, 2))
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4 md:flex-row md:items-center"
    >
      <Controller
        name="phoneNo"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FloatingLabelInput
              type="tel"
              label="Mobile Number"
              labelClassName="bg-[#D2EEE0]"
              className="flex-1"
              {...field}
              id="phoneNo"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button>Search Doctors</Button>
    </form>
  )
}
