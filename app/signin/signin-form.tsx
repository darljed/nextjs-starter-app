'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { signinFormSchema } from "@/models/signin"
import z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useAuth } from "@/providers/AuthProvider"


export default function SigninForm() {
    const router = useRouter()
    const { context } = useAuth()


    const form = useForm({
        resolver: zodResolver(signinFormSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    })

    async function handleSubmit(data: z.infer<typeof signinFormSchema>){
        
        try {
            const signin = await fetch('/api/auth/sign-in/email', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if(!signin.ok){
                const msg = await signin.json()
                throw new Error(msg.message)
            }

            // successful sign-in
            await context?.refetch()
            router.push('/dashboard')

        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'An error occured')
        }
    }

    return (
        <div>
            <Card className="max-w-lg m-auto mt-20">
                <CardHeader>
                    <CardTitle>Sign-in to your account</CardTitle>
                    <CardDescription>Fill in the form to access the dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>
                            <fieldset disabled={form.formState.isSubmitting} className="flex flex-col w-full gap-2">
                                <FormField 
                                    name="email"
                                    control={form.control}
                                    render={({field})=> (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    name="password"
                                    control={form.control}
                                    render={({field})=> (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="password"/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </fieldset>
                            <fieldset disabled={form.formState.isSubmitting} className="flex flex-col w-full gap-2 mt-6">
                                
                                <FormField 
                                    name="rememberMe"
                                    control={form.control}
                                    render={({field})=> (
                                        <FormItem>
                                            <div className="flex gap-2">
                                                <FormControl>
                                                    <Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} />
                                                </FormControl>
                                                <FormLabel>Remember me</FormLabel>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className="w-full">Sign-in</Button>
                            </fieldset>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
