import z from "zod"

const searchHealthServicesFormSchema = z.object({
  country: z.string().min(1, { error: "" }),
  type: z.string().min(1, { error: "" }),
})

export default searchHealthServicesFormSchema
