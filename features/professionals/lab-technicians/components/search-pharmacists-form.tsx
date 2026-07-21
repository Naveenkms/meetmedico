"use client"
import z from "zod"
import { Controller } from "react-hook-form"

import {
  SearchProfessionalsFormCountryInput,
  SearchProfessionalsForm,
  SearchProfessionalsFormSubmitButton,
  SearchProfessionalsFormSpecialityInput,
} from "../../components/search-professionals-form/search-professionals-form"
import useFormForSearchProfessionalsForm from "../../hooks/use-form-for-search-professionals-form"
import searchProfessionalsFormSchema from "../../schema/search-professionals-form-schema"
import { Field, FieldError } from "@/components/ui/field"

export default function SearchLabTechniciansForm() {
  const form = useFormForSearchProfessionalsForm()

  const onSubmit = (data: z.infer<typeof searchProfessionalsFormSchema>) => {
    alert("You submitted the following values:" + JSON.stringify(data, null, 2))
  }
  return (
    <SearchProfessionalsForm
      id="search-lab-technicians"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Controller
        name="country"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <SearchProfessionalsFormCountryInput
              label="Country / City"
              aria-invalid={fieldState.invalid}
              {...field}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="speciality"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <SearchProfessionalsFormSpecialityInput
              label="Specialty"
              placeholder="eg. Microbiology, Hematology"
              aria-invalid={fieldState.invalid}
              {...field}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Field>
        <SearchProfessionalsFormSubmitButton form="search-lab-technicians">
          Search Lab Technicians
        </SearchProfessionalsFormSubmitButton>
      </Field>
    </SearchProfessionalsForm>
  )
}
