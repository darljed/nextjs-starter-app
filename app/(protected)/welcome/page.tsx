'use client'
import SendVerificationEmail from '@/components/SendVerificationEmail'
import SignOut from '@/components/SignOut'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useSidebar } from '@/components/ui/sidebar'
import { useAuth } from '@/providers/AuthProvider'
import { LogOut, MailWarning } from 'lucide-react'
import { useEffect } from 'react'

export default function Welcome() {
    const { setOpenMobile } = useSidebar();

    useEffect(() => {
        setOpenMobile(false)
    },[])

    
    return (
        <div>
                <Card className="max-w-lg m-auto mt-20 ">
                    <CardHeader>
                        <CardTitle>
                            Welcome
                        </CardTitle>
                        <CardDescription>
                            This page is protected and can only be viewed if you are properly authenticated.
                        </CardDescription>
                    </CardHeader>
                </Card>
        </div>
    )
}
