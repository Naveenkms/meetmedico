import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

import searchProfessionalsFormSchema from "../schema/search-professionals-form-schema"

export default function useFormForSearchProfessionalsForm() {
  const form = useForm<z.infer<typeof searchProfessionalsFormSchema>>({
    resolver: zodResolver(searchProfessionalsFormSchema),
    defaultValues: {
      country: "",
      speciality: "",
    },
    reValidateMode: "onChange",
  })

  return form
}
