'use client'

import SendVerificationEmail from '@/components/SendVerificationEmail';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/providers/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
    const { user } = useAuth()
    const router = useRouter()

    if(!user){
        router.push('/signin?error=You must login first.')
    }


    
  return (
    <div className="m-auto mt-20 max-w-lg">
        <Card>
            <CardHeader className="text-center">
                <CardTitle>
                    <h1 className={`text-2xl ${user?.emailVerified ? 'text-green-600' : ''}`}>
                        { user?.emailVerified ? `Email verified` : `Verify your email`}
                    </h1>
                </CardTitle>
                <CardDescription>
                    {
                        user?.emailVerified ? 'All good! No action needed.' : 'Please check your mailbox to confirm your email.'
                    }
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                {
                    !user?.emailVerified 
                    ? <SendVerificationEmail />
                    : <Button variant="outline" asChild>
                        <Link href='/dashboard'>Go to dashboard</Link>
                    </Button>
                }
                
            </CardContent>
        </Card>
    </div>
  )
}
