'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { authClient } from '@/lib/auth-client'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

export default function Dashboard() {
    const [signingOut, setSigningOut ] = useState<boolean>(false)
    const router = useRouter()
    async function signout(){
        setSigningOut(true)
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    setSigningOut(false)
                    toast.success('You have been signed out.')
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
