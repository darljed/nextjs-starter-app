'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { authClient } from '@/lib/auth-client'
import { useAuth } from '@/providers/AuthProvider'
import { type User } from 'better-auth'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Dashboard() {
    const [signingOut, setSigningOut ] = useState<boolean>(false)

    const { user, context } = useAuth()

    const router = useRouter()
    async function signout(){
        setSigningOut(true)
        await authClient.signOut({
            fetchOptions: {
                onSuccess: async () => {
                    setSigningOut(false)
                    toast.success('You have been signed out.')
                    await context?.refetch()
                    router.push('/')
                }
            }
        })
    }
    
    return (
        <div>
                <Card className="max-w-lg m-auto mt-20 ">
                    <CardHeader>
                        <CardTitle>
                            Dashboard
                        </CardTitle>
                        <CardDescription>
                            This page is protected and can only be viewed if you are properly authenticated.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p><strong>Name:</strong> {user?.name}</p>
                        <p><strong>Email:</strong> {user?.email}</p>
                    </CardContent>
                    <CardFooter>
                        <Button disabled={signingOut} onClick={signout}>
                            Sign Out
                            <LogOut size={12} />
                        </Button>
                    </CardFooter>
                </Card>
        </div>
    )
}
