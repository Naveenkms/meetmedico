"use client"
import z from "zod"
import { Controller } from "react-hook-form"

import useFormForSearchHealthServicesForm from "../../hooks/use-form-for-search-health-services-form"
import searchHealthServicesFormSchema from "../../schema/search-health-services-form"
import {
  SearchHealthServicesForm,
  SearchHealthServicesFormTypeInput,
  SearchServicesFormSubmitButton,
} from "../../components/search-health-services-form"
import { Field, FieldError } from "@/components/ui/field"
import CountryInput from "@/components/country-input"

export default function SearchHospitalsForm() {
  const form = useFormForSearchHealthServicesForm()

  const onSubmit = (data: z.infer<typeof searchHealthServicesFormSchema>) => {
    alert("You submitted the following values:" + JSON.stringify(data, null, 2))
  }

  return (
    <SearchHealthServicesForm
      id="search-health-services"
      onSubmit={form.handleSubmit(onSubmit)}
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
            <SearchHealthServicesFormTypeInput
              label="Hospital Type"
              placeholder="eg. ENT / Orthopedic"
              aria-invalid={fieldState.invalid}
              {...field}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Field>
        <SearchServicesFormSubmitButton form="search-hospitals">
          Search Hospitals
        </SearchServicesFormSubmitButton>
      </Field>
    </SearchHealthServicesForm>
  )
}
