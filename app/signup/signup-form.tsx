'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { signupFormSchema } from '@/models/signup'
import z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { FieldSeparator } from "@/components/ui/field"
import { toast } from "sonner"
import { sign } from "crypto"
import { useRouter } from "next/navigation"


export default function SignupForm() {
    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(signupFormSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false
        }
    })

    async function handleSubmit(data: z.infer<typeof signupFormSchema>){
        
        try {
            const signup = await fetch('/api/auth/sign-up/email', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if(!signup.ok){
                const msg = await signup.json()
                throw new Error(msg.message)
            }

            // successful signup
            router.push('/signup/success')

        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div>
            <Card className="max-w-lg m-auto mt-20">
                <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>We are happy to get you onboard.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>
                            <fieldset disabled={form.formState.isSubmitting} className="flex flex-col w-full gap-2">
                                <FormField 
                                    name="name"
                                    control={form.control}
                                    render={({field})=> (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
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
                                <FormField 
                                    name="confirmPassword"
                                    control={form.control}
                                    render={({field})=> (
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
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
                                    name="acceptTerms"
                                    control={form.control}
                                    render={({field})=> (
                                        <FormItem>
                                            <div className="flex gap-2">
                                                <FormControl>
                                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                                </FormControl>
                                                <FormLabel>Accept terms and conditions</FormLabel>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className="w-full">Signup</Button>
                            </fieldset>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
