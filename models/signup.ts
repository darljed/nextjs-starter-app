import z from 'zod'

export const signupFormSchema = z.object({
    name: z.string().min(3),
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    acceptTerms: z.coerce.boolean()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
}).refine((data) => data.acceptTerms === true, {
        message: "You must accept the terms and conditions",
        path: ["acceptTerms"]
    })