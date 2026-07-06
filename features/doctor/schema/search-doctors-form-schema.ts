import z from "zod"

const searchDocotorsFormSchema = z.object({
  country: z.string().min(1, { error: "" }),
  speciality: z.string().min(1, { error: "" }),
})

export default searchDocotorsFormSchema
