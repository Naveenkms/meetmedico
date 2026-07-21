import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

import searchHealthServicesFormSchema from "../schema/search-health-services-form"

export default function useFormForSearchHealthServicesForm() {
  const form = useForm<z.infer<typeof searchHealthServicesFormSchema>>({
    resolver: zodResolver(searchHealthServicesFormSchema),
    defaultValues: {
      country: "",
      type: "",
    },
    reValidateMode: "onChange",
  })

  return form
}
