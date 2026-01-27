import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="m-auto mt-20 max-w-lg">
        <Card>
            <CardHeader className="text-center">
                <CardTitle>
                    <h1 className="text-green-600 text-2xl">
                        Signup Completed!
                    </h1>
                </CardTitle>
                <CardDescription>
                    You have successfully completed signing up!
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <div className="flex flex-col gap-1">
                    <Button variant='outline' asChild><Link href="/"><span>Home</span></Link></Button>
                    <Button variant='outline' asChild><Link href="/signup"><span>Signup Page</span></Link></Button>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
