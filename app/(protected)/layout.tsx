import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { notFound, redirect, unauthorized } from 'next/navigation';
import { ReactNode } from 'react'
import { toast } from 'sonner';
export default async function layout({ children }: {
    children: ReactNode;
}) {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    
    if(!session){
        redirect('/signin?m=You must login first')
    }

  return (
    <div>
        { children }
    </div>
  )
}
