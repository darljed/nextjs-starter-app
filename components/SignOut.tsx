'use client'
import { authClient } from '@/lib/auth-client'
import { useAuth } from '@/providers/AuthProvider'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { Loader, LogOut } from 'lucide-react'

export default function SignOut() {
    const [signingOut, setSigningOut ] = useState<boolean>(false)
    const { context } = useAuth()

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
        <Button disabled={signingOut} onClick={signout} className="flex gap-2 text-black" variant="outline">
            Sign Out
            <LogOut size={12} />
            {
                signingOut && <Loader className="animate-spin" />
            }
        </Button>
    )
}
