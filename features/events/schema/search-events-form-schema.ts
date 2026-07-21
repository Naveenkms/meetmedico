import z from "zod"

const searchEventsFormSchema = z.object({
  eventType: z.literal(["ongoing", "upcoming"]),
  country: z.string().min(1, { error: "" }),
  type: z.string().min(1, { error: "" }),
})

export default searchEventsFormSchema
