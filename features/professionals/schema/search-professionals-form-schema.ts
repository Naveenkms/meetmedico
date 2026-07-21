import z from "zod"

const searchProfessionalsFormSchema = z.object({
  country: z.string().min(1, { error: "" }),
  speciality: z.string().min(1, { error: "" }),
})

export default searchProfessionalsFormSchema
