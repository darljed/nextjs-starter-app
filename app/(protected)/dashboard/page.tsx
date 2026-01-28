'use client'
import SendVerificationEmail from '@/components/SendVerificationEmail'
import SignOut from '@/components/SignOut'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/providers/AuthProvider'
import { LogOut, MailWarning } from 'lucide-react'

export default function Dashboard() {

    const { user } = useAuth()

    
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
                        <p><strong>Email:</strong> {user?.email} {user?.emailVerified && <Badge variant="secondary">verified</Badge>}</p>
                        {
                            !user?.emailVerified && (
                                <div className="mt-2">
                                    <Alert>
                                        <MailWarning />
                                        <AlertTitle>Email not verified</AlertTitle>
                                        <AlertDescription>
                                            Please check your mailbox to verify your email.
                                            <div>
                                                <SendVerificationEmail />
                                            </div>
                                        </AlertDescription>
                                    </Alert>
                                </div>)
                        }
                    </CardContent>
                    <CardFooter>
                        <SignOut />
                    </CardFooter>
                </Card>
        </div>
    )
}
