import z from "zod";

export const signinFormSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
    rememberMe: z.coerce.boolean()
})