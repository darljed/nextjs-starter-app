'use client'
import { authClient } from '@/lib/auth-client'
import { useAuth } from '@/providers/AuthProvider'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { Loader, LogOut } from 'lucide-react'
import { SidebarMenuButton, useSidebar } from './ui/sidebar'

export default function SignOut() {
    const { state } = useSidebar()
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
        <SidebarMenuButton disabled={signingOut} onClick={signout} className={`flex gap-2 bg-red-400 text-white hover:bg-red-500 hover:text-white  ${state === 'expanded' ? 'justify-center' : ''}`} variant="outline">
            
            {
                signingOut ? <Loader className="animate-spin" /> : <LogOut size={12} />
            }
            <span>Sign Out</span>
        </SidebarMenuButton>
    )
}
