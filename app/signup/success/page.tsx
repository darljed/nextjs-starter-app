import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { links } from '@/utils/links'
import Link from 'next/link'

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
                    {
                        links.map(link=> (
                            <Button key={link.label} variant='outline' asChild><Link href={link.href}><span>{link.label}</span></Link></Button>
                        ))
                    }
                    
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
